import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaymentInput {
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

export class PaymentUpdateInput {
  @ApiProperty()
  @IsNumber()
  account_id: number;
  @ApiProperty()
  @IsNumber()
  update_sum: number;
}
