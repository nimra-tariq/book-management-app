import { IsEmail, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  // @MinLength(6)
  // @Matches(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/)
  @Matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  // @Matches(
  //   new RegExp(
  //     '(?=^.{8,}$)(?=.*\\d)(?=.*[!@#$%^&*]+)(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$',
  //     'g',
  //   ),
  // )
  // @Matches(
  //   new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
  // )
  password: string;

  @IsNotEmpty()
  firstName: string;
}

export class UpdateDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  // @MinLength(6)
  // @Matches(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/)
  @Matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  // @Matches(
  //   new RegExp(
  //     '(?=^.{8,}$)(?=.*\\d)(?=.*[!@#$%^&*]+)(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$',
  //     'g',
  //   ),
  // )
  // @Matches(
  //   new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
  // )
  @IsOptional()
  password?: string;

  @IsNotEmpty()
  @IsOptional()
  firstName?: string;
  @IsNotEmpty()
  @IsOptional()
  lastName?: string;
}
