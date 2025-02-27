import React from 'react';
//importo router, route, routes e link per la navigazione
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//importo le pagine
import HomePage from './pages/HomePage';
import About from './pages/About';
import PostPage from './pages/PostPage';
//importo dettagli post
import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <Router>
      <div>
        {/*barra di navigazione con link alle varie pagine*/}
        <nav>
          <ul>
            {/*link home*/}
            <li><Link to="/">Home</Link></li>
            {/*link About us*/}
            <li><Link to="/about">About us</Link></li>
            {/*link post*/}
            <li><Link to="/posts">Lista Post</Link></li>
          </ul>
        </nav>
        {/*definisco le rotte dell'app*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<PostPage />} />
          {/*dettagli singolo post*/}
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

//esporto il componente
export default App;
