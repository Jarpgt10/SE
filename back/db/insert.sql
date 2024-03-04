/* Alejandro Rivas
2024-03-02
*/

INSERT INTO  rol_usuario( nombre ) VALUES ('it');

INSERT INTO menu(nombre_menu) VALUES ('HOME');
INSERT INTO `se`.`menu` (`nombre_menu`) VALUES ('CUSROS');

INSERT INTO permiso_menu(id_menu,id_usuario) VALUES(1,1);
INSERT INTO `se`.`permiso_menu` (`id_menu`, `id_usuario`) VALUES ('2', '1');
