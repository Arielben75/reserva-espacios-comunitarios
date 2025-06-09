import { Reservacion } from "src/dominio/entities/reservacion.entity";

export interface ReservacionRepositoryPort {
  save(reservation: Reservacion): Promise<Reservacion>;
  findByUserId(userId: string): Promise<Reservacion[]>;
  findByDateRange(startDate: Date, endDate: Date): Promise<Reservacion[]>;
  findBySpaceId(spaceId: string): Promise<Reservacion[]>;
}