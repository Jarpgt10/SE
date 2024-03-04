/*
Alejandro Rivas
2024-03-04
Se agrega campo para guardar contraseña xd
*/
ALTER TABLE `se`.`usuario` 
ADD COLUMN `contrasena` VARCHAR(10) NULL AFTER `carne`;