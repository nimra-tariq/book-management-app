import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateDto, UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  creatUser(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }
  @Get(':email')
  getUser(@Param() email: string) {
    return this.userService.getUser(email);
  }
  @Delete(':email')
  deleteUser(@Param() email: string) {
    return this.userService.deleteUser(email);
  }
  @Patch('update')
  updateUser(@Body() dto: UpdateDto) {
    return this.userService.updateUser(dto);
  }
}
