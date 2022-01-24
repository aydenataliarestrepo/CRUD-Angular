//Definimos un enrutador  
    //Router, método que devuelve un objeto 
import { Router } from "express";  

//Importamos las propiedades de los controladores 
import {indexController} from '../controllers/indexControllers';
        
//Creo una clase 
class IndexRoutes{
    //Incializo el router 
    public router: Router = Router();

    //Constructor 
    constructor(){

        //Agrgar una ruta 
        this.config();
    }

    //Configuracion del constructor 
    config(): void{
        
        //Creación tura inicial para el servidor 
        this.router.get('/',indexController.index );
    }
}

//Instancio una constante 
const indexRoutes = new IndexRoutes();

//Exporto el enrutador
export default indexRoutes.router;