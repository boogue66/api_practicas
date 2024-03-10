import express,{Request, Response} from "express";

//inicializacion
const app = express();
//configuracion
app.set('port', process.env.PORT || 3000);
//middleware
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
//rutas
app.get('/', (req: Request, res: Response) => {
    res.send(`Puedes realizar peticioes en: ${req.headers.host}/<URI_METHODS>`);
});

export default app;