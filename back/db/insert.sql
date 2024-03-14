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

INSERT INTO `se`.`rol_usuario` (`nombre`) VALUES ('catedratico');

INSERT INTO `se`.`usuario` (`primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `correo`, `id_rol_usuario`)
VALUES ('Generico', 'Usuario', 'martines', 'martines', 'prueba@gmail.com', '2');


INSERT INTO `se`.`asignacion` (`id_usuario_catedratico`, `id_usuario_estudiante`, `id_curso`) VALUES ('2', '1', '1');


/* Alejandro Rivas
2024-03-08
*/

INSERT INTO  menu(nombre_menu) VALUES ('USUARIOS');

INSERT INTO `se`.`permiso_menu` (`id_menu`, `id_usuario`) VALUES ('3', '1');

INSERT INTO `se`.`rol_usuario` (`id_rol_usuario`, `nombre`, `estado`) VALUES ('3', 'alumno', b'1');