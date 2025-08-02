import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignupDto } from './dto/auth.dto';
// import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Body() { email, password }: AuthDto) {
    const user = this.authService.login(email, password);
    if (!user) {
      throw new HttpException('Invalid credentials', 401);
    }
    return user;
  }

  @Post('signup')
  signUp(@Body() createUserDto: SignupDto) {
    return this.authService.signUp(createUserDto);
  }
}
