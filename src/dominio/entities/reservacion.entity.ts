export enum EstadoReservacion {
  PENDIENTE = 'PENDIENTE',
  CONFIRMADA = 'CONFIRMADA',
  CANCELADA = 'CANCELADA'
}

export class Reservacion {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly espacioId: number,
    public readonly fechaInicioReserva: Date,
    public readonly fechaFinReserva: Date,
    public readonly estadoReserva: EstadoReservacion,
    public readonly importeTotal: number
  ) {}

  static create(userId: string, espacioId: number, fechaInicioReserva: Date, fechaFinReserva: Date, importeTotal: number): Reservacion {
    return new Reservacion(
      crypto.randomUUID(),
      userId,
      espacioId,
      fechaInicioReserva,
      fechaFinReserva,
      EstadoReservacion.PENDIENTE,
      importeTotal
    );
  }
}