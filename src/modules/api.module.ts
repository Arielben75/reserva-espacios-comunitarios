

import { Module } from "@nestjs/common";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { RouterModule } from "@nestjs/core";

const modules = [
  UsuariosModule,
];

@Module({
  imports: [
    ...modules,
    RouterModule.register(
      modules.map((module) => ({
        path: 'api', // Path to modules
        module,
      })),
    ),
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}