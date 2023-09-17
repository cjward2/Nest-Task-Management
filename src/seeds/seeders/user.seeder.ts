import { Seeder } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { User } from 'src/users/user/user';
import { factory } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(): Promise<void> {
    await factory(User)()
      .map(async (user) => {
        user.email = faker.internet.email();
        return user;
      })
      .createMany(10);
  }
}
