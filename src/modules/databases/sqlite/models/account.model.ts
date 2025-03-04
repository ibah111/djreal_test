import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Validate,
} from 'sequelize-typescript';
import User from './user.balance';

@Table({
  tableName: 'Accounts',
  paranoid: true,
})
export default class Account extends Model<
  InferAttributes<Account>,
  InferCreationAttributes<Account>
> {
  @AllowNull(false)
  @Validate({
    // Чтобы значение не могло быть ниже нуля
    min: 0,
  })
  @Column(DataType.FLOAT)
  balance: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  r_user_id: number;

  @BelongsTo(() => User)
  User?: User;
}
