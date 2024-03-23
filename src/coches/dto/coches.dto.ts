import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CochesDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly marca: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly anio: string;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly color;
  static schema: any;

}