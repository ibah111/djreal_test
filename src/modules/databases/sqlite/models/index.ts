import { ModelCtor } from 'sequelize-typescript';
import User from './user.model';
import Account from './account.model';
import Payment from './payment.model';

export const models: ModelCtor[] = [User, Account, Payment];
