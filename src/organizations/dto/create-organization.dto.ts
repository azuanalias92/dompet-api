import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'Traone Law Pirate Crew' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: 'LAW' })
  code: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 1 })
  creatorId: number;

}
