import { User } from 'src/users/user/user';
import {
  BeforeUpdate,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ type: 'date', nullable: true })
  dueDate: Date;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ default: false })
  isDeleted: boolean;

  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedOn: Date;

  @BeforeUpdate()
  setDeletedOn() {
    if (this.isDeleted && !this.deletedOn) {
      this.deletedOn = new Date();
    }
  }
}
