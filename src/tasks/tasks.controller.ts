import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get(':userId')
  findTasksByUserId(@Param('userId') userId: string) {
    return this.tasksService.findTasksByUserId(Number(userId));
  }

  @Get(':taskId')
  findTaskById(@Param('taskId') taskId: string) {
    return this.tasksService.findTaskById(Number(taskId));
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
}
