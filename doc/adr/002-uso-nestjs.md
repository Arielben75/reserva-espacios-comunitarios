# ADR 002. Usar NestJS como Framework Backend con una Arquitectura Hexagonal

## Estado
Aprobado (2025-06-05)

## Contexto
La app de reservas de espacios Comunitarios en su concepcion es pequeña pero con proxpeccion a crecimiento entonces necesitamos un framework escalable, flexible que nos permita adaptar la arquitectura Hexagonal, y que cumpla con estas caracteristicas:
- Soporte para TypeScript.
- Arquitectura modular.
- Integración con bases de datos y el orm Prisma.
- Integración con jest para pruebas unitarias.
- Integracion con servicos de mensajeria.
- Integracion con servicos externos de calendarios.

## Opciones Evaluadas
1. **Express.js**:
   - ✅ Más flexible.
   - ❌ Falta estructura estándar.
   - ❌ los tiempos aumentan debedio a la produnda configuracion y estructuracion base.

2. **NestJS**:
   - ✅ Arquitectura definida (Módulos, Providers).
   - ✅ Soporte de microservicios.
   - ✅ Sistema de módulos, inyección de dependencias (DI) y interfaces, es ideal para implementar esta Arquitectura.

3. **Laravel**:
   - ✅ diseñado para ser rápido y productivo con convenciones claras.
   - ✅ Laravel es popular por su rapidez para crear CRUDs y APIs.
   - ❌ Añade complejidad al usar una aquitectura Hexagonal y rompe las convenciones de laravel.
   - ❌ Laravel ofrece herramientas integradas que asumen un flujo MVC estándar.

## Decisión
   - Usar **NestJS** por su enfoque en escalabilidad y mantenibilidad.
   - Al usar la arquitectura **Hexagonal** con nestjs se potencias las siguientes caracteristicas:
      * **Flexibilidad** Los adaptadores aislan detalles técnicos
      * **Mantenibilidad** el Codigo se organiza con responsabilidades Claras
      * **Escalabilidad** se pueden añadir nuevas interfaces sin modificar el nucleo de las reservas
      * **Portabilidad** la aplicacion se deberia poder ejecuar en cualquier entorno y no depender de la infraestructura especifica
      * **Seguridad** La lógica de autenticación puede centralizarse en el núcleo, mientras los adaptadores implementan OAuth/JWT.
      * **Interoperabilidad** Los adaptadores para APIs externas (central de Email, Google calendar) se conectan vía interfaces estándar.

## Consecuencias
   1. Positivas
      - Todos los nuevos servicios seguirán la estructura de NestJS con arquitectuira Hexagonal.
      -la aplicacion sera mas escalable y mantenible a largo plazo.
   2. Negativas
      - Deberemos capacitar al equipo en sus patrones.
      - deberemos hacer revisiones constantes del codigo por un tiempo para asegurar que se cumpla el patron hexagonal