import { Module } from "@nestjs/common";
import { TasksController } from "./controllers/tasks.controller";
import { TaskService } from "./services/tasks.service";

@Module({
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}