import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Account from 'src/modules/databases/sqlite/models/account.model';
import Payment from 'src/modules/databases/sqlite/models/payment.model';
import User from 'src/modules/databases/sqlite/models/user.model';

@Injectable()
export default class UserService {
  constructor(
    @InjectModel(User, 'sqlite') private readonly modelUser: typeof User,
  ) {}

  async getInfo(name: string) {
    return await this.modelUser.findOne({
      where: {
        name,
      },
      include: [
        {
          required: true,
          model: Account,
        },
        {
          required: false,
          model: Payment,
        },
      ],
    });
  }
}
