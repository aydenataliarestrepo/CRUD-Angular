//Definimos un enrutador  
    //Router, método que devuelve un objeto 
import { Router } from "express";  

//Importar la constante 
import opcionesController from '../controllers/opcionesControllers';

//Creo una clase 
class OpcionesRoutes {
    //Incializo el router 
    public router: Router = Router();

    //Constructor 
    constructor(){

        //Agregar una ruta 
        this.config();
    }

    //Configuracion del constructor 
    config(): void{
        
        //Creación ruta inicial para el servidor 

        //Permite listar las opciones (usuarios)
        this.router.get('/', opcionesController.list);

        //Permite listar una opcion (usuarios)
        this.router.get('/:id', opcionesController.getOne);

        //Para crear más opciones (usuarios) qu se quieran agregar  
        this.router.post('/', opcionesController.create);

                
        //Actualizar una opcion (usuario)
        this.router.put('/:id' , opcionesController.update);

        //Eliminar una opcion (usuario)
        this.router.delete('/:id' , opcionesController.delete);
    }
}

//Instancio una constante 
const opcionesRoutes = new OpcionesRoutes();

//Exporto el enrutador
export default opcionesRoutes.router;