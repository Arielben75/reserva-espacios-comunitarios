import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/modules/database.module';
import { ReservacionService } from 'src/aplicacion/services/reservacion.service';
import { EspaciosRepository } from 'src/infraestructura/adapters/repositories/espacios.repository';
import { ReservationController } from 'src/presentacion/controller/reservaciones.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [
    ReservationController,
  ],
  providers: [
    ReservacionService,
    {provide:'EspaciosRepositoryPort',useClass: EspaciosRepository},
  ],
  exports: [
    ReservacionService,
    'EspaciosRepositoryPort',
  ],
})
export class ReservacionesModule {}