import { Task } from 'src/tasks/task/task';
import { User } from 'src/users/user/user';

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [User, Task], // Adjust the path based on your setup
  synchronize: true,
};
