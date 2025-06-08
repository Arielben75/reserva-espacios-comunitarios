# ADR 003. Implementar JWT para Autenticación de Usuarios

## Status
Aceptado (2025-06-06)

## Contexto
Necesitamos un método seguro para autenticar usuarios en la API y poder restringir las acciones a realizar dentro de la Api.

## Opciones Evaluadas
1. **Sesiones en Redis**:
   - ✅ Compatibilidad con legacy.
   - ❌ Complejidad en escalamiento.
   - ❌ El equipo de Desarrollo es nuevo en el manejo de Redis y necesita tiempo para Adaptarse.

2. **JWT (JSON Web Tokens)**:
   - ✅ Stateless, ideal para microservicios.
   - ❌ Invalidación requiere estrategias adicionales.

## Decisión
Usar **JWT** con los siguientes ajustes:
- TTL corto (12 horas).
- Refresh tokens almacenados. para las reconsultas pasadas las 12 horas.

## Consecuencias
- Deberemos implementar un servicio de gestión de tokens.