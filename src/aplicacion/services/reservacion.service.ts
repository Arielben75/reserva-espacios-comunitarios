import { Injectable, Inject } from '@nestjs/common';
import { Reservacion } from '../../dominio/entities/reservacion.entity';
import { ReservacionRepositoryPort } from '../../dominio/ports/repositories/reservacion-repository.port';
import { EspaciosRepositoryPort } from '../../dominio/ports/repositories/espacios-repository.port';
import { NotificacionPort } from '../../dominio/ports/services/notificaciones.port';
import { PagosPort } from '../../dominio/ports/services/pagos.port';

@Injectable()
export class ReservacionService {
  constructor(
    //@Inject('ReservacionRepositoryPort')
    //private readonly reservationRepository: ReservacionRepositoryPort,
    @Inject('EspaciosRepositoryPort')
    private readonly spaceRepository: EspaciosRepositoryPort,
    //@Inject('NotificacionPort')
    //private readonly notificationService: NotificacionPort,
    //@Inject('PagosPort')
    //private readonly paymentService: PagosPort
  ) {}

  async createReservation(
    userId: string,
    spaceId: number,
    startDate: Date,
    endDate: Date,
    paymentData: any
  ): Promise<Reservacion> {
    // 1. Validar disponibilidad del espacio
    const space = await this.spaceRepository.findById(spaceId);
    if (!space || !space.available) {
      throw new Error('Space not available');
    }

    // 2. Calcular costo
    const hours = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60);
    const totalAmount = hours * space.hourlyRate;

    // 3. Procesar pago
    /* const paymentResult = await this.paymentService.processPayment(totalAmount, paymentData);
    if (!paymentResult.success) {
      throw new Error('Payment failed');
    } */

    // 4. Crear reserva
    const reservation = Reservacion.create(userId, spaceId, startDate, endDate, totalAmount);
    //const savedReservation = await this.reservationRepository.save(reservation);

    // 5. Enviar notificaciones
    /* await this.notificationService.sendEmail(
      'user@email.com',
      'Reserva Confirmada',
      `Tu reserva para ${space.name} ha sido confirmada`
    );

    await this.notificationService.sendPushNotification(
      userId,
      'Reserva Confirmada',
      `Tu reserva ha sido confirmada exitosamente`
    ); */

    return reservation;
  }

  /* async getUserReservations(userId: string): Promise<Reservacion[]> {
    return await this.reservationRepository.findByUserId(userId);
  } */
}