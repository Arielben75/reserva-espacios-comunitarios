import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { ReservacionService } from '../../aplicacion/services/reservacion.service';
import { ApiTags } from '@nestjs/swagger';
import { BearerAuthToken, VersionDescription } from '../decorators/controller.decorator';
import { CreateReservacionDto } from '../dtos/reservaciones.dto';

@ApiTags('[reservaciones] reservaciones'.toUpperCase())
@Controller('reservaciones')
export class ReservacionController {
  constructor(private readonly reservationService: ReservacionService) {}

  @Post('/registrar')
  @BearerAuthToken()
  @VersionDescription(
      '1',
      'Servico para registrar una reserva',
    )
  async createReservation(
    @Body() createReservationDto: CreateReservacionDto,
  ) {
    const reservation = await this.reservationService.createReservation(
      createReservationDto.usuarioId,
      createReservationDto.espacioId,
      createReservationDto.fechaInical,
      createReservationDto.fechaFinal,
      createReservationDto.horasReserva
    );

    return {
      success: true,
      message: 'Reservation created successfully',
      data: reservation
    };
  }

  /* @Get(':userId')
  async getUserReservations(@Param('userId') userId: string) {
    const reservations = await this.reservationService.getUserReservations(userId);

    return {
      success: true,
      data: reservations
    };
  } */
}

