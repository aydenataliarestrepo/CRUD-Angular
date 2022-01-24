//Imporatmos el express para crear el servidor (backend) 
    //{...}Trae un tipo de dato. 
import express, {Application} from 'express'; 

//Importamos el modulos
import morgan from 'morgan';
import cors from 'cors'; 

//Importamos las rutas para utilizarlas 
import indexRoutes from './routes/indexRoutes'; 

//Importo las rutas para poder editar el frontend 
import opcionesRoutes from './routes/opcionesRoutes';

//Creacion de la clase 
 class Server{

    //Creo una propiedad de la clase que almacena el objeto arrojado por express
    public app: Application;

    //Constructor de la clase para inicializar express 
    constructor(){ 

        //Inicializo la propiedad
            //.express()- Ejecutar modulo exprees
        this.app = express();

        //Inicializaciones
        this.config();
        this.routes();
    }

    //Método para configurar propiedad app 
        // :void ya que no devulve nada 
    config(): void {

        //Asignación de puerto asignado o libre
        this.app.set('port', process.env.PORT || 3000);
        
        //Utilizo morgan para observar en consola las acciones realizadas sobre la app 
        this.app.use(morgan('dev')); 

        //Utilizo los datos para iniciar peticiones al servidor
        this.app.use(cors());

        //Para que la aplicacion sepa utilizar el json
        this.app.use(express.json());

        //Habilitamos opcion para enviar formulario html 
        this.app.use(express.urlencoded({extended: false}));

        //Habilitamos la  
        this.app.delete; 
    }
        
    //Método para definir las rutas 
    routes() : void {

        //Utilizo el enrutador creado "indexRoutes"
        this.app.use('/', indexRoutes);
        this.app.use('/api/opciones',opcionesRoutes)
    }

    //Método para inicializar el servidor y escuche
    start():void {

        //Selecciono el puerto a ser ecuchado
        this.app.listen(this.app.get('port'), () => {

            //Muesto el puerto en funcion
            console.log(`Servidor en el puerto`, this.app.get('port'));

        } );
    }
 }

 //Inicializo el servidor const server = 
    //Creacion del servidor => new Server();
const server = new Server();

//Ejecuto el método Start 
server.start();
  