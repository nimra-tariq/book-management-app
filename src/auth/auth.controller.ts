import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get(':id')
  hello(@Param('id', ParseBoolPipe) id: 'boolean') {
    console.log(id, 'id logged');

    return 'hello world';
  }

  @Post('signup')
  signUp(
    // @Body('name') name: string,
    // @Body('email', ParseIntPipe) email: number,
    @Body() dto: AuthDto,
  ) {
    return this.authService.signUp(dto);
  }
  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }
}
