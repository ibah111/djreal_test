import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaymentInput {
  @ApiProperty({
    description: 'ID пользователя',
    default: 1,
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    description: 'С какого кошелька проводится оплата',
    default: 1,
  })
  @IsNumber()
  user_account_id: number;

  @IsNumber()
  @ApiProperty({
    description: 'Сумма платежа',
    default: 100,
  })
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
