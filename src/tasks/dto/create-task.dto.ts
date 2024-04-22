import { IsBoolean, IsString, MinLength } from "class-validator";

export class CreateTaskDto {

    @IsString()
    @MinLength(3)
    title: string;
    
    @IsBoolean()
    status: boolean;
}