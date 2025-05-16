//src/auth/auth.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './auth.entity';
import { PrismaService } from 'src/common/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
const roundOfHashing = 10;

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new NotFoundException({
        field: 'email',
        message: `No account found for email: ${email}`,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException({
        field: 'password',
        message: 'The password you entered is incorrect.',
      });
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
  async signUp(data: Prisma.UserCreateInput): Promise<User> {
    console.log('Signup');
    const hashedPassword = await bcrypt.hash(data.password!, roundOfHashing);
    data.password = hashedPassword;
    return await this.prisma.user.create({ data });
  }
  async validateUser(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
