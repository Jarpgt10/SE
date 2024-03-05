/*
Alejandro Rivas
2024-03-04

Se agrego para que haga match con los iconos del front(Icon.jsx) y asi manejarlos mas dinamico

*/


UPDATE `se`.`menu` SET `icon` = 'Home' WHERE (`id_menu` = '1');

/*
Alejandro Rivas
2024-03-05
se agrego contraseña encriptada para el usuario de it
*/
UPDATE `se`.`usuario` SET `contrasena` = 'b20b0f63ce2ed361e8845d6bf2e59811aaa06ec96bcdb92f9bc0c5a25e83c9a6' WHERE (`id_usuario` = '1');