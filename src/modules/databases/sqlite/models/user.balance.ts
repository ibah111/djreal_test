import { InferAttributes, InferCreationAttributes } from 'sequelize';
import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import Account from './account.model';

@Table({
  tableName: 'Users',
  paranoid: true,
})
export default class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Account)
  Accounts?: Account;
}
