# ADR 004: Selección de PostgreSQL como Base de Datos Principal

## Estado
Aprobado (2025-06-06)

## Contexto
Se quiere elegir una tecnologia de base de datos para el proyecto de reservas que:
- Maneje datos estructurados de las reservas con relaciones complejas.
- que soporte alta concurrencia de consultas.
- Garantice ACID
- Permita escalamiento futuro

Opciones evaluadas:
1. MySQL (8.0+)
2. MongoDB (6.0+)
3. PostgreSQL (15+)

## Análisis Comparativo

### 1. PostgreSQL
✅ **Ventajas**:
- **Soporte avanzado para JSON y relaciones** (híbrido relacional/NoSQL)
- **Tipos de datos avanzados**: Arrays, GIS, UUID, custom types
- **Mejor concurrencia**: MVCC (Multi-Version Concurrency Control)
- **Extensibilidad**: Extensiones como PostGIS, TimescaleDB
- **Comunidad activa** y desarrollo constante
- **Replicación nativa** (Logical/Streaming)

❌ **Desventajas**:
- Mayor consumo de RAM en cargas pesadas
- Configuración más compleja que MySQL

### 2. MySQL
✅ **Ventajas**:
- Más sencillo para operaciones CRUD básicas
- Mejor rendimiento en lecturas simples
- Amplia adopción en ecosistemas web

❌ **Desventajas**:
- Limitado en operaciones analíticas complejas
- Menor flexibilidad en tipos de datos
- Problemas conocidos con concurrencia alta

### 3. MongoDB
✅ **Ventajas**:
- Esquema flexible (ideal para datos no estructurados)
- Escalado horizontal sencillo
- Alto rendimiento en escrituras

❌ **Desventajas**:
- Sin soporte nativo para JOINs
- Transacciones más limitadas
- Consistencia eventual en configuraciones distribuidas

## Decisión
**Se selecciona PostgreSQL** porque:

1. **Balance perfecto** entre capacidades relacionales y NoSQL
2. **Soporte nativo para GIS** (requerimiento futuro)
3. **Mejor manejo de transacciones complejas**
4. **Extensibilidad** para casos de uso analíticos
5. **Licencia MIT**

## Consecuencias
- **Capacitación**: Entrenamiento en optimización de consultas
- **Infraestructura**: Requerirá ~30% más RAM que MySQL
- **Migración**: Plan para posibles migraciones desde sistemas legacy