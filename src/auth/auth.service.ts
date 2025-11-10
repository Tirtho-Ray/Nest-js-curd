/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userServices:UserService){}
    async register (registerData: RegisterDto){
        const isExitingUser = await this.userServices.createUser(RegisterDto.email)
        if(isExitingUser){
            return {message:"user already exits"}
        }
        const user = await this.userServices.createUser(registerData);
        return{
            message:"user create successfully",
            data:user
        }
    }

}
