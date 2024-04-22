import { Body, Controller, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "../services/tasks.service";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('tasks')
@Controller({
    path: 'tasks'
})
export class TasksController {

    constructor(private tasksService: TaskService) { }

    @Get()
    getAllTasks(@Query() query: any) {
        // Go to database
        // Go to another backend or API
        // return "Obteniendo todas las tareas";
        console.log(query)
        return this.tasksService.tasks;
    }

    @Get('/:id')
    getTask(@Param('id') id: number) {
        return this.tasksService.findTaskById(id);
    }

    @Post()
    @HttpCode(201)
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }
}