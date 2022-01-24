"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imporatmos el express para crear el servidor (backend) 
//{...}Trae un tipo de dato. 
const express_1 = __importDefault(require("express"));
//Importamos el modulos
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Importamos las rutas para utilizarlas 
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
//Importo las rutas para poder editar el frontend 
const opcionesRoutes_1 = __importDefault(require("./routes/opcionesRoutes"));
//Creacion de la clase 
class Server {
    //Constructor de la clase para inicializar express 
    constructor() {
        //Inicializo la propiedad
        //.express()- Ejecutar modulo exprees
        this.app = (0, express_1.default)();
        //Inicializaciones
        this.config();
        this.routes();
    }
    //Método para configurar propiedad app 
    // :void ya que no devulve nada 
    config() {
        //Asignación de puerto asignado o libre
        this.app.set('port', process.env.PORT || 3000);
        //Utilizo morgan para observar en consola las acciones realizadas sobre la app 
        this.app.use((0, morgan_1.default)('dev'));
        //Utilizo los datos para iniciar peticiones al servidor
        this.app.use((0, cors_1.default)());
        //Para que la aplicacion sepa utilizar el json
        this.app.use(express_1.default.json());
        //Habilitamos opcion para enviar formulario html 
        this.app.use(express_1.default.urlencoded({ extended: false }));
        //Habilitamos la  
        this.app.delete;
    }
    //Método para definir las rutas 
    routes() {
        //Utilizo el enrutador creado "indexRoutes"
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/opciones', opcionesRoutes_1.default);
    }
    //Método para inicializar el servidor y escuche
    start() {
        //Selecciono el puerto a ser ecuchado
        this.app.listen(this.app.get('port'), () => {
            //Muesto el puerto en funcion
            console.log(`Servidor en el puerto`, this.app.get('port'));
        });
    }
}
//Inicializo el servidor const server = 
//Creacion del servidor => new Server();
const server = new Server();
//Ejecuto el método Start 
server.start();
