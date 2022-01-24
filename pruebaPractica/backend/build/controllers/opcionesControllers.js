"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importo la conexion a la base de datos 
const database_1 = __importDefault(require("../database"));
// Defino una clase 
class OpcionesController {
    //Método para listar opciones (usuarios)
    list(req, res) {
        res.json('Listando usuarios ');
    }
    //Obtener usuario especifico 
    getOne(req, res) {
        res.json({ text: 'Usuario id : ' + req.params.id });
    }
    //Método para crear opciones(usuarios) 
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Crear conexion a bd 
            //console.log(req.body)
            //Almacenar en bd 
            yield database_1.default.query('INSERT INTO usuario set ?', +[req.body]);
            //Revision de funcionamiento 
            res.json({ message: 'Usuario creado y guardado' });
        });
    }
    //Metodo para eliminar opciones (usuarios)
    delete(req, res) {
        res.json({ text: 'Eliminando usuario ' + req.params.id });
    }
    //Metodo para actualizar ocpiones (usuarios)
    update(req, res) {
        res.json({ text: 'Actualizando usuario ' + req.params.id });
    }
}
//Inicializar la clase
const opcionesController = new OpcionesController();
//Exporto la constante 
exports.default = opcionesController;
