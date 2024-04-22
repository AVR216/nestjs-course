import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "../dto/create-task.dto";
import { UpdateTaskDto } from "../dto/update-task.dto";
import { ResponseTaskDto } from "../dto/response-task.dto";

@Injectable({})
export class TaskService {

    private _tasks: ResponseTaskDto[] = [];

    get tasks() {
        return [...this._tasks];
    }

    createTask(task: CreateTaskDto) {
        console.log(task)
        this._tasks.push({
            ...task,
            "id": this._tasks.length + 1 
        });
        return 'Creando tarea';
    }

    findTaskById(id: number) {
        const task = this._tasks.find(task => task?.id == id);

        if(!task) {
            throw new NotFoundException('Task not found');
        }
        return task;
    }

    updateTask(task: UpdateTaskDto) {
       console.log(task);
       return 'Task was updated'; 
    }
}