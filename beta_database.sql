REATE TABLE "Usuarios" (
  "ID" int PRIMARY KEY,
  "Nombre" varchar,
  "Teléfono" varchar,
  "Correo" varchar,
  "Dirección" varchar,
  "Tipo_de_Usuario" enum(Paciente,Paramédico,Doctor,Administrador)
);

CREATE TABLE "Emergencias" (
  "ID" int PRIMARY KEY,
  "Descripción" text,
  "Fecha" date,
  "Hora" time,
  "Estado" "enum(Pendiente,En proceso,Completado)",
  "Ubicación" varchar,
  "ID_Usuario" int
);

CREATE TABLE "Personal_Medico" (
  "ID" int PRIMARY KEY,
  "Nombre" varchar,
  "Especialidad" "enum(Paramédico,Médico General,Cardiólogo,Pediatra,Traumatólogo)",
  "Teléfono" varchar,
  "Disponibilidad" enum(Disponible,Ocupado)
);

CREATE TABLE "Vehiculos" (
  "ID" int PRIMARY KEY,
  "Placa" varchar,
  "Tipo" "enum(Ambulancia,Moto Médica)",
  "Estado" "enum(Disponible,En ruta,En mantenimiento)",
  "Ubicación_Actual" varchar,
  "ID_Conductor" int
);

CREATE TABLE "Hospitales" (
  "ID" int PRIMARY KEY,
  "Nombre" varchar,
  "Dirección" varchar,
  "Especialidades" varchar,
  "Camas_Disponibles" int,
  "Teléfono" varchar
);

CREATE TABLE "Historial_Atencion" (
  "ID" int PRIMARY KEY,
  "ID_Paciente" int,
  "ID_Emergencia" int,
  "Acciones_realizadas" text,
  "ID_Personal_Medico" int
);

CREATE TABLE "Reportes_Estadisticas" (
  "ID" int PRIMARY KEY,
  "Cantidad_Emergencias" int,
  "Tiempo_Promedio_Respuesta" float,
  "Regiones_con_Mas_Incidencias" varchar
);

ALTER TABLE "Emergencias" ADD FOREIGN KEY ("ID_Usuario") REFERENCES "Usuarios" ("ID");

ALTER TABLE "Vehiculos" ADD FOREIGN KEY ("ID_Conductor") REFERENCES "Personal_Medico" ("ID");

ALTER TABLE "Historial_Atencion" ADD FOREIGN KEY ("ID_Paciente") REFERENCES "Usuarios" ("ID");

ALTER TABLE "Historial_Atencion" ADD FOREIGN KEY ("ID_Emergencia") REFERENCES "Emergencias" ("ID");

ALTER TABLE "Historial_Atencion" ADD FOREIGN KEY ("ID_Personal_Medico") REFERENCES "Personal_Medico" ("ID");
