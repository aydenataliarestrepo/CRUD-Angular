//Iporto conexion con mysql 
import mysql  from 'promise-mysql';

//Importo la conexion a la base de datos
import keys from './keys';

//Constante para trabajar el modulo de conexion de la base de datos 
const pool = mysql.createPool(keys.database);

//Método que ejecuta la constante pool 
pool.getConnection() 
    .then(connection => { 

        //Si existe una conexion utilizarla 
        pool.releaseConnection(connection);

        //Msj para ifnormar la conexion a la BD
        console.log('Base de datos conectada');
    });

//Exportamos la conexion 
export default pool; 