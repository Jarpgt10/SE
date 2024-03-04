
/*----------------------------GENERADOR DE USUARIO DE USUARIO------------------------------- */
DELIMITER //
CREATE TRIGGER before_insert_usuario
BEFORE INSERT ON usuario
FOR EACH ROW
BEGIN
    SET NEW.usuario = CONCAT(LOWER(SUBSTRING(NEW.primer_nombre, 1, 1)), LOWER(NEW.primer_apellido));
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