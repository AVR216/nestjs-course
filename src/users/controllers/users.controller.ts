import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user-response.dto';

@ApiTags('users')
@Controller('users')
export class UserController {

    constructor(private usersService: UsersService) { }

    @Get('/say-hello')
    sayHelloUser() {
        return this.usersService.sayHello();
    }

    @ApiOkResponse({
        description: 'Users list from database',
        type: CreateUserDto,
        isArray: true
    })
    @ApiInternalServerErrorResponse({ description: 'Internal server errror has ocurred' })
    @Get()
    async getUsers(): Promise<UserResponseDto[]> {
        return this.usersService.getUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe({whitelist: true}))
    async createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }
}
