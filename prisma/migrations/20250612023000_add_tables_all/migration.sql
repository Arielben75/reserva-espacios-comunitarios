-- CreateTable
CREATE TABLE "TiposEspacios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "creadoEn" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" DATETIME
);

-- CreateTable
CREATE TABLE "TiposReservacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "creadoEn" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" DATETIME
);

-- CreateTable
CREATE TABLE "Espacios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "tipoEspacioId" INTEGER NOT NULL,
    "descripcion" TEXT,
    "capacidad" INTEGER NOT NULL,
    "tarifaHora" REAL NOT NULL,
    "tarifaDia" REAL NOT NULL,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "creadoEn" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" DATETIME,
    CONSTRAINT "Espacios_tipoEspacioId_fkey" FOREIGN KEY ("tipoEspacioId") REFERENCES "TiposEspacios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reservaciones" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "espacioId" INTEGER NOT NULL,
    "fechaInicial" DATETIME NOT NULL,
    "fechaFinal" DATETIME NOT NULL,
    "horasReserva" INTEGER NOT NULL,
    "importeTotal" REAL NOT NULL,
    "estadoReservacionId" INTEGER NOT NULL,
    "transaccionId" TEXT,
    "eventoCalendarioId" TEXT,
    "estado" INTEGER NOT NULL DEFAULT 1,
    "creadoEn" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" DATETIME,
    CONSTRAINT "Reservaciones_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservaciones_espacioId_fkey" FOREIGN KEY ("espacioId") REFERENCES "Espacios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservaciones_estadoReservacionId_fkey" FOREIGN KEY ("estadoReservacionId") REFERENCES "TiposReservacion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
