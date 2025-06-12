export enum EstadoReservacion {
  PENDIENTE = 'PENDIENTE',
  CONFIRMADA = 'CONFIRMADA',
  CANCELADA = 'CANCELADA'
}

export class Reservacion {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly espacioId: number,
    public readonly fechaInicioReserva: Date,
    public readonly fechaFinReserva: Date,
    public readonly estadoReserva: EstadoReservacion,
    public readonly importeTotal: number
  ) {}

  static create(userId: number, espacioId: number, fechaInicioReserva: Date, fechaFinReserva: Date, importeTotal: number): Reservacion {
    return new Reservacion(
      0,
      userId,
      espacioId,
      fechaInicioReserva,
      fechaFinReserva,
      EstadoReservacion.PENDIENTE,
      importeTotal
    );
  }
}