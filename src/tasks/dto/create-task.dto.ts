import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { TransformDate } from 'src/decorators/transform-date.decorator';

export class CreateTaskDto {
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsOptional()
  @Transform(TransformDate)
  @IsDate()
  dueDate: Date | null;

  @IsNotEmpty()
  userId: number;
}
