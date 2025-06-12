import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/modules/database.module';
import { ReservacionService } from 'src/aplicacion/services/reservacion.service';
import { EspaciosRepository } from 'src/infraestructura/adapters/repositories/espacios.repository';
import { ReservacionController } from 'src/presentacion/controller/reservaciones.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [
    ReservacionController,
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