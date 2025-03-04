import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaymentInput } from './Payment.input';
import UserService from './Payment.service';

@ApiTags()
@Controller('user')
export default class PaymentController {
  constructor(private readonly service: UserService) {}

  @Post('pay')
  async pay(@Body() body: PaymentInput) {
    return await this.service.pay(body);
  }
}
