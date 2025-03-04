import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import User from 'src/modules/databases/sqlite/models/user.model';
import UserService from './User.service';
import UserController from './User.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User], 'sqlite')],
})
export default class UserModule {}
