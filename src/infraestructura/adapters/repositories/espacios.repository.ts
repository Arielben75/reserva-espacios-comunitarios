import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infraestructura/database/prima.service";
import { Espacios } from "src/dominio/entities/espacios.entity";
import { EspaciosRepositoryPort } from "src/dominio/ports/repositories/espacios-repository.port";

@Injectable()
export class EspaciosRepository implements EspaciosRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Espacios[]> {
    const spaces = await this.prisma.espacios.findMany({
      where: { estado: 1 }
    });
    return spaces.map(this.toDomain);
  }

  async findById(id: number): Promise<Espacios | null> {
    const space = await this.prisma.espacios.findUnique({ where: { id } });
    return space ? this.toDomain(space) : null;
  }

  async findAvailable(fechaInicioReserva: Date, fechaFinReserva: Date): Promise<Espacios[]> {
    const spaces = await this.prisma.espacios.findMany({
      where: {
        estado: 1,
      }
    });
    return spaces.map(this.toDomain);
  }

  private toDomain(space: any): Espacios {
    return new Espacios(
      space.id,
      space.name,
      space.type,
      space.description,
      space.capacity,
      space.hourlyRate,
    );
  }
}
