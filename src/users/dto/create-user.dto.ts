import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({
        description: `User's email`,
        maximum: 100,
        minimum: 5
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: `User's name`,
        maximum: 50,
        minimum: 3
    })
    @IsString()
    @IsOptional()
    name?: string;
    
    @ApiProperty({
        description: `User's password`,
        maximum: 30,
        minimum: 8 
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}