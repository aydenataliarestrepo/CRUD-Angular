"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Definimos un enrutador  
//Router, método que devuelve un objeto 
const express_1 = require("express");
//Importar la constante 
const opcionesControllers_1 = __importDefault(require("../controllers/opcionesControllers"));
//Creo una clase 
class OpcionesRoutes {
    //Constructor 
    constructor() {
        //Incializo el router 
        this.router = (0, express_1.Router)();
        //Agregar una ruta 
        this.config();
    }
    //Configuracion del constructor 
    config() {
        //Creación ruta inicial para el servidor 
        //Permite listar las opciones (usuarios)
        this.router.get('/', opcionesControllers_1.default.list);
        //Permite listar las opciones (usuarios)
        this.router.get('/:id', opcionesControllers_1.default.getOne);
        //Para crear más opciones (usuarios) qu se quieran agregar  
        this.router.post('/', opcionesControllers_1.default.create);
        //Actualizar una opcion (usuario)
        this.router.put('/:id', opcionesControllers_1.default.update);
        //Eliminar una opcion (usuario)
        this.router.delete('/:id', opcionesControllers_1.default.delete);
    }
}
//Instancio una constante 
const opcionesRoutes = new OpcionesRoutes();
//Exporto el enrutador
exports.default = opcionesRoutes.router;
