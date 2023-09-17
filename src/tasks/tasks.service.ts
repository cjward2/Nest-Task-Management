import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task/task';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRespository: Repository<Task>,
  ) {}

  async findTasksByUserId(userId: number) {
    return this.taskRespository.find({ where: { userId } });
  }

  async findTaskById(taskId: number) {
    const task = this.taskRespository.findOne({ where: { id: taskId } });

    if (!task) {
      throw new NotFoundException(`Task ${taskId} not found.`);
    }

    return task;
  }

  async createTask(createTaskDto: CreateTaskDto) {
    const task = this.taskRespository.create(createTaskDto);

    return this.taskRespository.save(task);
  }
}
