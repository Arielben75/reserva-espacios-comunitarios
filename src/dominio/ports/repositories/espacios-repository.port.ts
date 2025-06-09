import { Espacios } from "src/dominio/entities/espacios.entity";

export interface EspaciosRepositoryPort {
  findAll(): Promise<Espacios[]>;
  findById(id: number): Promise<Espacios | null>;
  findAvailable(fechaInicioReserva: Date,  fechaFinReserva: Date): Promise<Espacios[]>;
}