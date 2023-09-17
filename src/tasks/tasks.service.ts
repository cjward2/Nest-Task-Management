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
    return this.taskRespository.find({ where: { userId, isDeleted: false } });
  }

  async findTaskById(taskId: number) {
    const task = await this.taskRespository.findOne({ where: { id: taskId } });

    if (!task) {
      throw new NotFoundException(`Task ${taskId} not found.`);
    }

    return task;
  }

  async createTask(createTaskDto: CreateTaskDto) {
    const task = await this.taskRespository.create(createTaskDto);

    return this.taskRespository.save(task);
  }

  async softDeleteTask(taskId: number) {
    const task = await this.findTaskById(taskId);

    task.isDeleted = true;

    await this.taskRespository.save(task);
  }

  async findDeletedTasksByUserId(userId: number) {
    return this.taskRespository.find({
      where: { userId, isDeleted: true },
    });
  }

  async updateTask(taskId: number, updateTaskDto: CreateTaskDto) {
    const task = await this.taskRespository.preload({
      id: taskId,
      ...updateTaskDto,
    });

    if (!task) {
      throw new NotFoundException(`Task ${taskId} not found`);
    }

    return this.taskRespository.save(task);
  }
}
