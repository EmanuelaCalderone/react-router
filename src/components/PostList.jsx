//importo hook useEffect e useState per gestire effetti e stato
import { useEffect, useState } from 'react';
//importo axios per le richieste http
import axios from 'axios';
//importo il componente Link
import { Link } from 'react-router-dom';

const PostList = () => {
    //creo lo stato per salvare i post
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //richiesta GET all'API per recuperare i post
        axios.get('http://localhost:3000/posts')
            .then(response => {
                //salvo i dati dei post
                setPosts(response.data);
            })
            //gestione errori
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div>
            {/*mappo i post e visualizzo titolo, contenuto e immagine */}
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <img src={`http://localhost:3000/${post.image}`} alt={post.title} />
                    {/*aggiungo il link alla pagina di dettaglio dei post*/}
                    <Link to={`/posts/${post.id}`}>Vedi dettagli</Link>
                </div>
            ))}
        </div>
    );
};

//esporto il componente PostList
export default PostList;
