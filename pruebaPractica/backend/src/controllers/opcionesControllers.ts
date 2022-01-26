//Importar elementos de express
import {query, Request, Response, text} from 'express';
import { createConnection } from 'mysql';

//Importo la conexion a la base de datos 
import pool from '../database';

// Defino una clase 
class OpcionesController {
    
    //Método para listar opciones (usuarios)
    public async list (req:Request, res:Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios');
        res.json(usuarios);
    }

    //Obtener usuario especifico 
    public async getOne (req:Request, res:Response): Promise <any>{
        const { id }= req.params;
        
        const baseusuario = await pool.query('SELECT * FROM usuarios');
        const usuario =  await pool.query('SELECT * FROM usuarios WHERE nombre = ?', [id]);
        if (usuario.length > 0){
            return res.json(usuario);
        }
        res.status(404).json(baseusuario); 
                          
    }
    
    //Método para crear opciones(usuarios) 
    public async create (req:Request, res:Response): Promise<void>{
        //Almacena los datos angular 
        console.log(req.body)
        
        //Almacenar en bd a traves de una consulta y al ser asincrona utilizo await
        await pool.query("INSERT INTO usuarios  SET ? ",[req.body]);
        //Revision de funcionamiento 
        res.json({message:'Usuario creado y guardado'});
    }

    //Metodo para eliminar opciones (usuarios)
    public async delete (req:Request, res:Response):Promise <void>{
        const { id }= req.params;
        await pool.query('DELETE FROM usuarios WHERE nombre = ?',[id])
        res.json({message:'El usuario fue eliminado'});
    }

    //Metodo para actualizar ocpiones (usuarios)
    public async update (req:Request, res:Response): Promise<void> {
        const { id }= req.params;
        await pool.query('UPDATE  usuarios set ?  WHERE idusuario = ? ',[req.body , id])
        res.json({message:'Usuario actualizado '});

    }
    
}

//Inicializar la clase
const opcionesController = new OpcionesController();

//Exporto la constante 
export default opcionesController; 