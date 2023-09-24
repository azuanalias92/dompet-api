import { ApiProperty } from '@nestjs/swagger';
import { CategoryNature, CategoryType } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Traone Law Pirate Crew' })
  name: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 1 })
  parentId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Income' })
  type: CategoryType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Must' })
  nature: CategoryNature;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  creatorId: number;
}
