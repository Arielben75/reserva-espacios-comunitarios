# ADR 001. Adopción de Arquitectura Hexagonal en el Proyecto Reserva de espacios Comunitarios

## Estado
Propuesto (2025-06-04)

## Contexto
El proyecto  de reserva de Espacios Comunitarios enfrenta desafíos de:
- Alto acoplamiento debido al uso del frameWork Laravel
- El anterior Personal dejo las pruebas unitarias sin realizar y algunas funcionalides sin probar.
- Al estar construido en Laravel se tiene poca flexibilidad ante cambios de infraestructura y el codigo y las librerias usadas estan obsolestaso son muy dificiles de actaulizar
- El proyecto esta totalmente des actualizado para los tiempos actaules

Opciones evaluadas:
1. Mantener MVC tradicional
2. Migrar a Arquitectura Hexagonal
3. Adoptar Microservicios

## Análisis de Opciones

### 1. MVC Tradicional (Actual)
✅ **Ventajas**:
- Desarrollo rápido con convenciones de Laravel
- Menor tiempo de desarrollo
- Amplia documentación disponible

❌ **Desventajas**:
- Lógica de la aplicacion esta altamente acoplada al framework de Laravel.
- Las pruebas unitarias son frágiles y dependen mucho del orm y la DB.
- Se hace difícil el mantenimiento de algunas librerias ya que estan descontinuadas.
- La escaliabilidad tanto horizontal como vertical son dificiles de ejecutar debido al altoi acoplamiento que se tiene.

### 2. Arquitectura Hexagonal
✅ **Ventajas**:
- El núcleo de negocio sera independiente del framework que se este usando.
- Nos permite mayor testabilidad de las funciones y mejorar la calidad del proyecto.
- Con los Adaptadores nos Fácilita la sustitución de estos y poder escalar la aplicacion
- Esta Arquitectura nos da una mejor mantenibilidad y escalabilidad del proyecto.

❌ **Desventajas**:
- La complejidad inicial aumentara los tiempos de desarrollo inicialmente.
- mayor tiempo de codificacion para tener un resultado optimo.
- Los desarrolladores deden adaptarse a esta nueva arquitectura.

### 3. Microservicios
✅ **Ventajas**:
- El sscalado es independiente
- Cada Modulo puede ser desarrollado con tecnologias independientes.

❌ **Desventajas**:
- La complejidad operativa es elevada para un proyecto de esta magnitud
- La latencia entre las comunicaciones de los micro servicios no son optimas para unproyecto mediano como este
- La consistencia de los datos debe ser fidedigna ya que se trabaja con horas y espacion determinados y una vez que se libera este espacio debe porde ser usado por otros.

## Decisión
**Implementar Arquitectura Hexagonal** por:

1. El balance es optimo entre la Conplejidad y el beneficio pues la aplicacion puede ser escalada con otras funcionalidades.
2. tenemos una independencia de la tecnológia usada y el framework con el que se desarrollara
3. La aplicacion estara mejor preparada para cambios en el futuro

**Estrategia**:
- Separar en el Proyecto en capas (Dominio/Aplicación/Infraestructura)
- Usar interfaces para abstracciones
- Inyección de dependencias

## Consecuencias
- Incremento inicial del 20-30% en tiempo desarrollo
- Necesidad de capacitación del equipo
- Beneficios a largo plazo en mantenibilidad y escalabilidad