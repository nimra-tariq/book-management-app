import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { AuthDto } from './dto/auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(dto: AuthDto) {
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

  signIn(): { msg: string } {
    return { msg: 'Signing IN' };
  }
}
