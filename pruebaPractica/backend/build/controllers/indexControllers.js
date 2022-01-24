"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
// Defino una clase 
class IndexController {
    //Creamos el método 
    index(req, res) {
        res.json({ text: ' API is /api/opciones' });
    }
}
//Inicializar la clase
exports.indexController = new IndexController();
