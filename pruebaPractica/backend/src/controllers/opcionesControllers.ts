//Importar elementos de express
import {Request, Response} from 'express';

//Importo la conexion a la base de datos 
import pool from '../database';

// Defino una clase 
class OpcionesController {
    
    //Método para listar opciones (usuarios)
    public list (req:Request, res:Response) {
        
        res.json('Listando usuarios ');
    }

    //Obtener usuario especifico 
    public getOne(req:Request, res:Response){
        res.json({text: 'Usuario id : ' + req.params.id });

    }
    
    //Método para crear opciones(usuarios) 
    public async create (req:Request, res:Response): Promise<void>{
        //Crear conexion a bd 
        //console.log(req.body)
        
        //Almacenar en bd 
        await pool.query('INSERT INTO usuario set ?', + [req.body]);
        //Revision de funcionamiento 
        res.json({message:'Usuario creado y guardado'});
    }

    //Metodo para eliminar opciones (usuarios)
    public delete (req:Request, res:Response){
        res.json({text:'Eliminando usuario '+ req.params.id});
    }

    //Metodo para actualizar ocpiones (usuarios)
    public update (req:Request, res:Response){
        res.json({text:'Actualizando usuario ' + req.params.id});
    }
}

//Inicializar la clase
const opcionesController = new OpcionesController();

//Exporto la constante 
export default opcionesController; 