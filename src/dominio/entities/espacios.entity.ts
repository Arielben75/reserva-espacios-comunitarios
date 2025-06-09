export enum tiposEspacio {
  SALON = 'SALON',
  AUDITORIO = 'AUDITORIO',
  CANCHA = 'CANCHA',
  TEATRO = 'TEATRO'
}

export class Espacios {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: tiposEspacio,
    public readonly capacity: number,
    public readonly hourlyRate: number,
    public readonly available: boolean
  ) {}
}