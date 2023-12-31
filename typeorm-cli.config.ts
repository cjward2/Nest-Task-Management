import { Task } from 'src/tasks/task/task';
import { User } from 'src/users/user/user';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [User, Task],
});
