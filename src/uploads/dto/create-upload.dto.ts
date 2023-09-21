import { ApiProperty } from '@nestjs/swagger';
import { UploadType } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUploadDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'test.pdf' })
  fileName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'PDF' })
  type: UploadType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'https://localhost/test.pdf' })
  path: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  creatorId: number;
}
