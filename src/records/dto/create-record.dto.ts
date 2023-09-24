import { ApiProperty } from '@nestjs/swagger';
import { CategoryNature, CategoryType, CurrencyType } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRecordDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1.11 })
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'MYR' })
  currency: CurrencyType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Income' })
  type: CategoryType;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  accountId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  categoryId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  creatorId: number;
}
