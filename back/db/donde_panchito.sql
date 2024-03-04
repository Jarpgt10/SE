CREATE TABLE `usuario` (
  `id_usuario` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60),
  `usuario` varchar(20),
  `contrasena` varchar(30),
  `fecha_registro` datetime
);

CREATE TABLE `tipo_cantidad_producto` (
  `id_tipo_cantidad_producto` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tipo_cantidad_Producto` varchar(15),
  `estado` bit
);

CREATE TABLE `cat_estado_orden` (
  `id_estado_orden` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `estado` varchar(20)
);

CREATE TABLE `producto` (
  `id_producto` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_tipo_cantidad_producto` int NOT NULL ,
  `nombre_producto` varchar(100),
  `fecha_ingreso` datetime DEFAULT "CURRENT_TIMESTAMP",
  `estado` bit
);
 
CREATE TABLE `proveedor` (
  `id_proveedor` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre_proveedor` varchar(100),
  `estado` bit
);

CREATE TABLE `inventario` (
  `id_inventario` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fecha_inicio` datetime,
  `fecha_final` datetime,
  `fecha_actualizado` datetime,
  `estado` bit DEFAULT 1
);

CREATE TABLE `historial_inventario` (
  `id_historial_inventario` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_producto` int,
  `cantidad` int,
  `precio` decimal(10, 2),
  `fecha_actualizado` datetime,
  `fecha_ingreso` datetime,
  `estado` bit DEFAULT 1
);


CREATE TABLE `inventario_detalle` (
  `id_detalle_inventario` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_producto` int,
  `cantidad` int,
  `precio` decimal(10, 2),
  `fecha_actualizado` datetime,
  `fecha_ingreso` datetime,
  `estado` bit DEFAULT 1
);

ALTER TABLE `producto` ADD FOREIGN KEY (`id_tipo_cantidad_producto`) REFERENCES `tipo_cantidad_producto` (`id_tipo_cantidad_producto`);

ALTER TABLE `historial_inventario` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

ALTER TABLE `detalle_inventario` ADD FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

ALTER TABLE `detalle_inventario` ADD FOREIGN KEY (`id_proveedor`) REFERENCES `proveedor` (`id_proveedor`);
