<<<<<<< HEAD

/*
Alejandro Rivas
ROLES Y PERMISOS
16-10-2023
*/


INSERT INTO usuario(nombre,usuario,contrasena,id_rol_usuario)
VALUES('Admnistrador','Administrador','DondePanchito!',1),('Empleado','panchito','panchito',1);

/*
Alejandro Rivas
ROLES Y PERMISOS
16-10-2023
*/

INSERT INTO tipo_cantidad_producto(tipo_cantidad_producto,estado)
VALUES ('LB',1),('KG',1),('UNIDADES',1),('LT',1),('BOLSAS',1),('CAJAS',1); 
=======
/* Alejandro Rivas
2024-03-02
*/

INSERT INTO  rol_usuario( nombre ) VALUES ('it');

INSERT INTO menu(nombre_menu) VALUES ('HOME');
INSERT INTO `se`.`menu` (`nombre_menu`) VALUES ('CUSROS');

INSERT INTO permiso_menu(id_menu,id_usuario) VALUES(1,1);
INSERT INTO `se`.`permiso_menu` (`id_menu`, `id_usuario`) VALUES ('2', '1');


INSERT INTO carrera_universitaria ( nombre_carrera, duracion, tipo_titulo)VALUES
('Ingeniería Informática', '5', 'Ingeniería'),
( 'Psicología', '4', 'Licenciatura'),
('Administración de Empresas', '4', 'Licenciatura'),
( 'Medicina', '6', 'Doctorado'),
( 'Ciencias de la Computación', '4', 'Licenciatura');




-- Insertar datos en la tabla curso relacionados con Ingeniería Informática (id_carrera_universitaria = 1)
INSERT INTO curso (id_carrera_universitaria, nombre) VALUES
(1, 'Introducción a la Programación'),
(1, 'Estructuras de Datos'),
(1, 'Diseño de Algoritmos');

-- Insertar datos en la tabla curso relacionados con Psicología (id_carrera_universitaria = 2)
INSERT INTO curso (id_carrera_universitaria, nombre) VALUES
(2, 'Psicología General'),
(2, 'Psicología del Desarrollo'),
(2, 'Psicología Clínica');

-- Insertar datos en la tabla curso relacionados con Administración de Empresas (id_carrera_universitaria = 3)
INSERT INTO curso (id_carrera_universitaria, nombre) VALUES
(3, 'Principios de Administración'),
(3, 'Contabilidad Financiera'),
(3, 'Marketing Estratégico');

-- Insertar datos en la tabla curso relacionados con Medicina (id_carrera_universitaria = 4)
INSERT INTO curso (id_carrera_universitaria, nombre) VALUES
(4, 'Anatomía Humana'),
(4, 'Farmacología'),
(4, 'Cirugía Avanzada');

-- Insertar datos en la tabla curso relacionados con Ciencias de la Computación (id_carrera_universitaria = 5)
INSERT INTO curso (id_carrera_universitaria, nombre) VALUES
(5, 'Teoría de la Computación'),
(5, 'Redes de Computadoras'),
(5, 'Desarrollo de Software');
>>>>>>> devall
