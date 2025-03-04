import { ModelCtor } from 'sequelize-typescript';
import User from './user.balance';
import Account from './account.model';

export const models: ModelCtor[] = [User, Account];
