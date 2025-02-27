//importo hook useEffect e useState
import { useEffect, useState } from 'react';
//importo useParams per ottenere l'ID dall'URL
import { useParams } from 'react-router-dom';
//importo axios per le richieste HTTP al server
import axios from 'axios';

const PostDetail = () => {
    //creo lo stato per memorizzare il post
    const [post, setPost] = useState(null);
    //per ottenre l'ID del post dall'URL
    const { id } = useParams();

    //useEffect per richeista al server ogni volta che l'ID cambia
    useEffect(() => {
        //richiesta GET per ottenere i dettagli del post usando l'ID
        axios.get(`http://localhost:3000/posts/${id}`)
            //se richiesta va a buon fine
            .then(response => {
                //salvo i post nello stato
                setPost(response.data);
            })
            //gestione errore
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }, [id]); //(richiesta fatta ogni volta che cambia l'ID)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <img src={`http://localhost:3000/${post.image}`} alt={post.title} />
        </div>
    );
};

//esporto il componente
export default PostDetail;
