//importo react
import React from 'react';
//importo il componente PostList
import PostList from '../components/PostList';

//definisco il componente
const PostPage = () => {
    return (
        <div>
            {/*titolo pagina*/}
            <h1>Lista dei Post</h1>
            {/*componente*/}
            <PostList />
        </div>
    );
};

export default PostPage;
