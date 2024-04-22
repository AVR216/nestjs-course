import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ValidateuserPipe } from 'src/projects/pipes/validateuser/validateuser.pipe';
import { AuthGuard } from '../guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        return `Hello ${query.name} you are ${query.age} years old`;
    }

}
