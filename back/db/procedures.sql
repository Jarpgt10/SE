DELIMITER //

CREATE PROCEDURE CreateAndGetNewUser
    (
    IN primer_nombre NVARCHAR(50),
    IN segundo_nombre NVARCHAR(50),
    IN primer_apellido NVARCHAR(50),
    IN segundo_apellido NVARCHAR(50),
    IN correo NVARCHAR(100),
    IN id_rol_usuario INT,
    IN contrasena NVARCHAR(100)
    )
BEGIN
    INSERT INTO usuario (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, id_rol_usuario, contrasena)
    VALUES (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, id_rol_usuario, contrasena);

    SELECT carne FROM usuario ORDER BY id_usuario DESC LIMIT 1;
END //

DELIMITER ;
