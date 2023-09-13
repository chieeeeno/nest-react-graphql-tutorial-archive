import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}
  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;
    this.tasks.push(newTask);
    return newTask;
  }
}
