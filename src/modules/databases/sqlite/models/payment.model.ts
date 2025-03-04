import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import User from './user.model';
import Account from './account.model';

@Table({
  tableName: 'Payments',
  paranoid: true,
})
export default class Payment extends Model<
  InferAttributes<Payment>,
  InferCreationAttributes<Payment>
> {
  @Column(DataType.STRING(4000))
  declare dsc: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  declare r_user_id: number;

  @BelongsTo(() => User)
  User?: User;

  @ForeignKey(() => Account)
  declare r_account_id: number;

  @BelongsTo(() => Account)
  Account?: Account;
}
