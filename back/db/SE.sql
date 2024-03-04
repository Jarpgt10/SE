

CREATE TABLE `rol_usuario` (
  `id_rol_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255),
  `estado` bit DEFAULT '1',
  `fecha_creacion` date DEFAULT 'now()'
);

CREATE TABLE `usuario` (
  `id_usuario` int PRIMARY KEY AUTO_INCREMENT,
  `usuario` varchar(255),
  `primer_nombre` varchar(255),
  `segundo_nombre` varchar(255),
  `primer_apellido` varchar(255),
  `segundo_apellido` varchar(255),
  `correo` varchar(255),
  `estado` bit DEFAULT '1',
  `fecha_creacion` date DEFAULT 'now()',
  `id_rol_usuario` int,
  `carne` varchar(50),
  `contrasena` text
);

CREATE TABLE `menu` (
  `id_menu` int PRIMARY KEY AUTO_INCREMENT,
  `nombre_menu` varchar(50),
  `estado` bit DEFAULT '1'
);

CREATE TABLE `permiso_menu` (
  `id_permiso_menu` int PRIMARY KEY AUTO_INCREMENT,
  `id_menu` int,
  `id_usuario` int
);

CREATE TABLE `curso` (
  `id_curso` int PRIMARY KEY AUTO_INCREMENT,
  `id_carrera_universitaria` int,
  `nombre` varchar(255),
  `codigo_curso` varchar(255) UNIQUE,
  `estado` bit DEFAULT '1',
  `fecha_creacion` date DEFAULT 'now()'
);

CREATE TABLE `asignacion` (
  `id_asignacion` int PRIMARY KEY AUTO_INCREMENT,
  `id_usuario_catedratico` int,
  `id_usuario_estudiante` int,
  `id_curso` int,
  `fecha_ultima_asignacion` date DEFAULT 'now()',
  `estado` bit DEFAULT '1'
);

CREATE TABLE `detalle_asignacion` (
  `id_asignacion` int,
  `id_maestro` int,
  `id_curso` int,
  `fecha_asignada` date DEFAULT 'now()',
  `estado` bit DEFAULT '1'
);

CREATE TABLE `carrera_universitaria` (
  `id_carrera_universitaria` int PRIMARY KEY AUTO_INCREMENT,
  `nombre_carrera` varchar(50),
  `duracion` varchar(50),
  `tipo_titulo` VARCHAR(20),
  `fecha_creacion` date DEFAULT 'now()',
  `estado` bit DEFAULT 1
);


ALTER TABLE `usuario` ADD FOREIGN KEY (`id_rol_usuario`) REFERENCES `rol_usuario` (`id_rol_usuario`);

ALTER TABLE `permiso_menu` ADD FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id_menu`);

ALTER TABLE `permiso_menu` ADD FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `curso` ADD FOREIGN KEY (`carrera_universitaria`) REFERENCES `carrera_universitaria` (`id_carrera_universitaria`);

ALTER TABLE `asignacion` ADD FOREIGN KEY (`id_usuario_catedratico`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `asignacion` ADD FOREIGN KEY (`id_usuario_estudiante`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `asignacion` ADD FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`);

ALTER TABLE `detalle_asignacion` ADD FOREIGN KEY (`id_asignacion`) REFERENCES `asignacion` (`id_asignacion`);

ALTER TABLE `detalle_asignacion` ADD FOREIGN KEY (`id_maestro`) REFERENCES `usuario` (`id_usuario`);

ALTER TABLE `detalle_asignacion` ADD FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id_curso`);
