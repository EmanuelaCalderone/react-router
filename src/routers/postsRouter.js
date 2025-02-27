import express from 'express';
//importo i post dal file data/posts.js
import { posts } from '../data/posts.js';

const postsRouter = express.Router();

//recupero tutti i post
postsRouter.get('/', (req, res) => {
    //restituisco l'array di post importato
    res.status(200).json(posts);
});

//recupero post per ID
postsRouter.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post non trovato' });
    }
    res.status(200).json(post);
});

//esporto componente
export default postsRouter;
