import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import Account from './account.model';
import Payment from './payment.model';

@Table({
  tableName: 'Users',
  paranoid: true,
})
export default class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  declare name: string;

  @HasMany(() => Account, { foreignKey: 'r_user_id', as: 'Accounts' })
  Accounts?: Account[];

  @HasMany(() => Payment, {
    as: 'Payments',
    foreignKey: 'r_user_id',
  })
  Payments: Payment;
}
