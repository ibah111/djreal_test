import { Module } from '@nestjs/common';
import PaymentModule from './Payment/Payment.module';
import UserModule from './User/User.module';

@Module({
  imports: [PaymentModule, UserModule],
})
export default class PagesModule {}
