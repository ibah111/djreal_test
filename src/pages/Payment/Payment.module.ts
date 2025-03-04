import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import PaymentController from './Payment.controller';
import UserService from './Payment.service';
import User from 'src/modules/databases/sqlite/models/user.balance';
import Account from 'src/modules/databases/sqlite/models/account.model';
import Payment from 'src/modules/databases/sqlite/models/payment.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Account, Payment], 'sqlite')],
  controllers: [PaymentController],
  providers: [UserService],
})
export default class PaymentModule {}
