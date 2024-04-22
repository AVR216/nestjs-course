import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserResponseDto } from '../dto/user-response.dto';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(private dbContext: PrismaService) { }

    async getUsers(): Promise<UserResponseDto[]> {
        const users = await this.dbContext.user.findMany();
        return users.map(user => plainToClass(UserResponseDto, user));
    }

    async createUser(user: CreateUserDto): Promise<UserResponseDto> {

        const existingUser = await this.dbContext.user.findUnique({
            where: { email: user.email }
        });

        if (existingUser) {
            throw new HttpException('The user already exists', HttpStatus.CONFLICT);
        } 

        const userSaved = await this.dbContext.user.create({ data: user });

        return plainToClass(UserResponseDto, userSaved); 
    }

    sayHello() {
        return 'Hello';
    }

}
