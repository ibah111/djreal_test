import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Account from 'src/modules/databases/sqlite/models/account.model';
import Payment from 'src/modules/databases/sqlite/models/payment.model';
import User from 'src/modules/databases/sqlite/models/user.model';
import { PaymentUpdateInput, PaymentInput } from './Payment.input';

@Injectable()
export default class PaymentService {
  constructor(
    @InjectModel(User, 'sqlite') private readonly modelUser: typeof User,
    @InjectModel(Account, 'sqlite')
    private readonly modelAccount: typeof Account,
    @InjectModel(Payment, 'sqlite')
    private readonly modelPayment: typeof Payment,
  ) {}

  async updateAccount({ account_id, update_sum }: PaymentUpdateInput) {
    const acc = await this.modelAccount.findOne({
      where: {
        id: account_id,
      },
      rejectOnEmpty: true,
    });
    const new_balance = acc.balance + update_sum;
    return acc
      .update({
        balance: new_balance,
      })
      .then(
        (rs) => `Баланс пополнен на сумму ${update_sum}. Баланс: ${rs.balance}`,
      );
  }

  async pay({ user_id: id, payment_sum, user_account_id }: PaymentInput) {
    const user = await this.modelUser.findOne({
      rejectOnEmpty: new Error(`User with id: ${id} not found`),
      where: {
        id,
      },
      include: [
        {
          model: Account,
          where: {
            id: user_account_id,
          },
          required: true,
        },
      ],
    });
    const acc = user.Accounts;
    if (acc) {
      const new_balance = acc.balance - payment_sum;
      return await acc
        .update({
          balance: new_balance,
        })
        .then(async () => {
          const dsc = `Пользователелем "${user.name}" совершена покупка на сумму ${payment_sum}. Предыдущее значение кошелька = ${acc.previous().balance}. Текущее значение кошелька ${new_balance}`;
          await this.modelPayment.create({
            r_user_id: id,
            r_account_id: acc.id,
            dsc,
          });
          return true;
        });
    } else return false;
  }
}
