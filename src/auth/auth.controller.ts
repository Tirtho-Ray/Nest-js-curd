/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authServices:AuthService){}
    @Post("register")
    async register (@Body() registerData:RegisterDto){
        return this.authServices.register(registerData)
    }
}
