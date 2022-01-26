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
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(usuarios);
        });
    }
    //Obtener usuario especifico 
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const baseusuario = yield database_1.default.query('SELECT * FROM usuarios');
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE nombre = ?', [id]);
            if (usuario.length > 0) {
                return res.json(usuario);
            }
            res.status(404).json(baseusuario);
        });
    }
    //Método para crear opciones(usuarios) 
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Almacena los datos angular 
            console.log(req.body);
            //Almacenar en bd a traves de una consulta y al ser asincrona utilizo await
            yield database_1.default.query("INSERT INTO usuarios  SET ? ", [req.body]);
            //Revision de funcionamiento 
            res.json({ message: 'Usuario creado y guardado' });
        });
    }
    //Metodo para eliminar opciones (usuarios)
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE nombre = ?', [id]);
            res.json({ message: 'El usuario fue eliminado' });
        });
    }
    //Metodo para actualizar ocpiones (usuarios)
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE  usuarios set ?  WHERE idusuario = ? ', [req.body, id]);
            res.json({ message: 'Usuario actualizado ' });
        });
    }
}
//Inicializar la clase
const opcionesController = new OpcionesController();
//Exporto la constante 
exports.default = opcionesController;
