import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { ReservacionService } from '../../aplicacion/services/reservacion.service';

interface CreateReservationDto {
  spaceId: number;
  startDate: string;
  endDate: string;
  paymentData: any;
}

@Controller('reservations')
export class ReservationController {
  constructor(private readonly reservationService: ReservacionService) {}

  @Post()
  // @UseGuards(JwtAuthGuard) // Implementar guard de autenticación
  async createReservation(
    @Body() createReservationDto: CreateReservationDto,
    // @GetUser() user: User // Obtener usuario del token JWT
  ) {
    const userId = 'current-user-id'; // Simplificado para el ejemplo
    const reservation = await this.reservationService.createReservation(
      userId,
      createReservationDto.spaceId,
      new Date(createReservationDto.startDate),
      new Date(createReservationDto.endDate),
      createReservationDto.paymentData
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

