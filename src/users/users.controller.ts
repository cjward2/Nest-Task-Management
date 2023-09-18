import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  findOne(@Body() createUserDto: CreateUserDto) {
    return this.userService.findOne(createUserDto);
  }
}
