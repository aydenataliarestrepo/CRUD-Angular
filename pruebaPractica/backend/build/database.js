"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Iporto conexion con mysql 
const promise_mysql_1 = __importDefault(require("promise-mysql"));
//Importo la conexion a la base de datos
const keys_1 = __importDefault(require("./keys"));
//Constante para trabajar el modulo de conexion de la base de datos 
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//Método que ejecuta la constante pool 
pool.getConnection()
    .then(connection => {
    //Si existe una conexion utilizarla 
    pool.releaseConnection(connection);
    //Msj para ifnormar la conexion a la BD
    console.log('Base de datos conectada');
});
//Exportamos la conexion 
exports.default = pool;
