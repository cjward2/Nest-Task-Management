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
  findTasksByUserId(@Param('userId') userId: number) {
    return this.tasksService.findTasksByUserId(userId);
  }

  @Get('/task/:taskId')
  findTaskById(@Param('taskId') taskId: number) {
    return this.tasksService.findTaskById(taskId);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete(':taskId')
  deleteTask(@Param('taskId') taskId: number) {
    return this.tasksService.softDeleteTask(taskId);
  }

  @Get('deleted/:userId')
  findDeletedTasksByUserId(@Param('userId') userId: number) {
    return this.tasksService.findDeletedTasksByUserId(userId);
  }

  @Put(':taskId')
  updateTask(
    @Param('taskId') taskId: number,
    @Body() updateTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.updateTask(taskId, updateTaskDto);
  }
}
