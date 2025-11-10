/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userServices: UserService) {}

  async register(registerData: RegisterDto) {
    const existingUser = await this.userServices.getUserByEmail(registerData.email);

    if (existingUser) {
      return { message: 'User already exists' };
    }

    const user = await this.userServices.createUser({
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    });

    return {
      message: 'User created successfully',
      data: user,
    };
  }
}
