import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import UserService from './User.service';

@ApiTags('User')
@Controller('user')
export default class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
    summary: 'Информация о пользователе',
    description:
      'Принимает параметр name, выдаёт информацию о пользователе по совпадению в выборке',
  })
  @Get('info')
  protected async getInfo(@Query('name') name: string) {
    return await this.service.getInfo(name);
  }
}
