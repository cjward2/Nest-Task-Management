import { IsBoolean, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsOptional()
  @IsDate()
  dueDate: Date | null;

  @IsNotEmpty()
  userId: number;
}
