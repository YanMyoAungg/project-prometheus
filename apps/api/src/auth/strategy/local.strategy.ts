import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';
import { AuthDto } from '../dto/auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  validate({ email, password }: AuthDto) {
    console.log('i was king');

    const user = this.authService.validateUser({ email, password });

    return user;
  }
}
