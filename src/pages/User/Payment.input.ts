import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export default class PaymentInput {
  @ApiProperty()
  @IsNumber()
  user_id: number;

  @ApiProperty()
  @IsNumber()
  user_account_id: number;

  @IsNumber()
  @ApiProperty()
  payment_sum: number;
}
