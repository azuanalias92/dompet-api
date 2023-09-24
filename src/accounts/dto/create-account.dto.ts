import { ApiProperty } from '@nestjs/swagger';
import { CurrencyType } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Traone Law Pirate Crew' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'LAW' })
  accountNo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'MYR' })
  currency: CurrencyType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: '#FFFFFF' })
  color: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  creatorId: number;
}
