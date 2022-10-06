import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class AuthDto {
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
