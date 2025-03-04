import { Module } from '@nestjs/common';
import UserModule from './Payment/Payment.module';

@Module({
  imports: [UserModule],
})
export default class PagesModule {}
