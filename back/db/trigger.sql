
/*----------------------------GENERADOR DE USUARIO DE USUARIO------------------------------- */
DROP TRIGGER before_insert_usuario;

DELIMITER //
CREATE TRIGGER before_insert_usuario
BEFORE INSERT ON usuario
FOR EACH ROW
BEGIN
    DECLARE usuario_count INT;
    DECLARE new_usuario VARCHAR(255);
    DECLARE new_carne VARCHAR(255);
    
    -- Generar el usuario
    SET new_usuario = CONCAT(LOWER(SUBSTRING(NEW.primer_nombre, 1, 1)), LOWER(NEW.primer_apellido));
    
    -- Verificar si ya existe un usuario con el mismo nombre
    SELECT COUNT(*) INTO usuario_count FROM usuario WHERE usuario LIKE CONCAT(new_usuario, '%');
    
    IF usuario_count > 0 THEN
        SET new_usuario = CONCAT(new_usuario, usuario_count + 1);
    END IF;
    
    SET NEW.usuario = new_usuario;
    
    -- Generar el carne
    SET new_carne = CONCAT(NEW.id_rol_usuario, '-', NEW.id_usuario, '-', DATE_FORMAT(NEW.fecha_creacion, '%y%m%d'));
    SET NEW.carne = new_carne;
    
END;
//
DELIMITER ;



-- Crear el trigger
DELIMITER //
CREATE TRIGGER before_insert_curso
BEFORE INSERT ON curso
FOR EACH ROW
BEGIN
    SET NEW.codigo_curso = CONCAT(LEFT(NEW.nombre, 3), LPAD((SELECT COUNT(*) + 1 FROM curso WHERE id_carrera_universitaria = NEW.id_carrera_universitaria), 3, '0'));
END;
//
DELIMITER ;