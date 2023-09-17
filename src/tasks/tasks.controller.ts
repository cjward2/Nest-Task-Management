import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get(':userId')
  findTasksByUserId(@Param('userId') userId: string) {
    return this.tasksService.findTasksByUserId(Number(userId));
  }

  @Get('/task/:taskId')
  findTaskById(@Param('taskId') taskId: string) {
    return this.tasksService.findTaskById(Number(taskId));
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: string) {
    return this.tasksService.softDeleteTask(Number(taskId));
  }

  @Get('deleted/:userId')
  findDeletedTasksByUserId(@Param('userId') userId: string) {
    return this.tasksService.findDeletedTasksByUserId(Number(userId));
  }

  @Put(':taskId')
  updateTask(
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.updateTask(Number(taskId), updateTaskDto);
  }
}
