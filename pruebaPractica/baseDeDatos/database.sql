
CREATE DATABASE ng_opciones_db; 


USE ng_opciones_db; 


CREATE SCHEMA usuarios {
  idusuario INT NOT NULL 
  nombre VARCHAR(45) NOT NULL
  activo CHAR(30) NOT NULL
  
  PRIMARY KEY (idusuario)

}

