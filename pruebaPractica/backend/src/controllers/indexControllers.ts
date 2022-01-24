//Importar elementos de express
import {Request, Response} from 'express';

// Defino una clase 
class IndexController {
    //Creamos el método 
    public index(req:Request, res:Response) {
        res.json({text:' API is /api/opciones'});
    }
}

//Inicializar la clase
export const indexController = new IndexController();