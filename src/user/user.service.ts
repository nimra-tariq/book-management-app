import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(dto: UserDto) {
    try {
      const hash = await argon2.hash(dto.password);
      // console.log(hash, 'hello i am hashed');

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          firstName: dto.firstName,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError)
        if (error.code === 'P2002')
          throw new ForbiddenException('User Already Exists');
    }
  }

  async getUser(dto) {
    // try {
    // console.log('called');
    // console.log(dto.email);

    //find user in db
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new NotFoundException('User Not found');
    console.log(user);
    delete user.hash;
    return user;
    // } catch (error) {
    //   if (error instanceof PrismaClientKnownRequestError)
    //     if (error.code === 'P2002')
    //       throw new ForbiddenException('User Not Found');
    // }
  }

  async deleteUser(dto) {
    //find user in db
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new NotFoundException('User Not found');
    else
      await this.prisma.user.delete({
        where: {
          email: dto.email,
        },
      });

    return { msg: 'User deleted successfully' };
  }

  async updateUser(dto) {
    try {
      const user = await this.prisma.user.update({
        where: { email: dto.email },
        data: { email: 'alice@prisma.io' },
      });
      delete user.hash;
      return { msg: 'User Updated Successfully', user };
    } catch (error) {
      throw new NotFoundException('User Not found');
    }
  }
}
