"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definimos un enrutador  
//Router, método que devuelve un objeto 
const express_1 = require("express");
//Importamos las propiedades de los controladores 
const indexControllers_1 = require("../controllers/indexControllers");
//Creo una clase 
class IndexRoutes {
    //Constructor 
    constructor() {
        //Incializo el router 
        this.router = (0, express_1.Router)();
        //Agrgar una ruta 
        this.config();
    }
    //Configuracion del constructor 
    config() {
        //Creación tura inicial para el servidor 
        this.router.get('/', indexControllers_1.indexController.index);
    }
}
//Instancio una constante 
const indexRoutes = new IndexRoutes();
//Exporto el enrutador
exports.default = indexRoutes.router;
