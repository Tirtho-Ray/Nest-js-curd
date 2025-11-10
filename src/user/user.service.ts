/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TRegister } from './user.type';

@Injectable()
export class UserService {

    constructor (private readonly prisma : PrismaService ){}

      async getUserByEmail(email: string) {
        return this.prisma.user.findFirst({
        where: { email },
        });
     }

    async createUser (data:TRegister){
        const user = this.prisma.user.create({data})
        return user;
    }
}

