import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsDateString, IsNumber } from "class-validator";

export class CreateReservacionDto {
  @Expose()
  @Type(() => Number)
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
    { message: 'el usuario debe ser tipo numero' },
  )
  @ApiProperty({
    description: 'identificador unico del usuario.',
    required: true,
  })
  usuarioId: number;

  @Expose()
  @Type(() => Number)
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
    { message: 'el espacio debe ser tipo numero' },
  )
  @ApiProperty({
    description: 'identificador unico del espacio.',
    required: true,
  })
  espacioId: number;

  @Expose()
  @IsDateString()
  @ApiProperty({
    type: Date,
    description: 'FECHA inicial de la reserva.',
    default: '1986-10-16',
  })
  fechaInical: Date;

  @Expose()
  @IsDateString()
  @ApiProperty({
    type: Date,
    description: 'FECHA final de la reserva.',
    default: '1986-10-16',
  })
  fechaFinal: Date;

  @Expose()
  @Type(() => Number)
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 0 },
    { message: 'La horas Reserva debe ser tipo numero' },
  )
  @ApiProperty({
    description: 'horas Reserva del espacio.',
    required: true,
  })
  horasReserva:number;
}