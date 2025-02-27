import express from 'express';
import cors from 'cors';
import postsRouter from './src/routers/postsRouter.js';

const app = express();
const port = 3000;

//configuro CORS per permettere le richieste dal frontend
app.use(cors({
    //URL del frontend
    origin: 'http://localhost:5173'
}));

//parso in json
app.use(express.json());

//recupero i file statici dalla cartella 'public'
app.use(express.static('public'));

//definisco la rotta principale
app.get('/', (req, res) => {
    res.send('Benvenuto nella API di blog!');
});

//gestisco richieste ai post tramite relativa rotta
app.use('/posts', postsRouter);

//avvio il server in ascolto sulla porta indicata
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});
