import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import GenresListContainer from './components/Genres/GenresListContainer';
import AuthorsListContainer from './components/Authors/AuthorsListContainer';
import ContentContainer from './components/Content/ContentContainer';
import AuthorBooks from './components/AuthorBooks/AuthorBooks';

function App() {
  return (
    <div className="app-wrapper">
      <div className="container mx-auto">
        <HeaderContainer />
        {/* <Routes>
          <Route path="/" element={<ContentContainer />} />
          <Route path="/genres" element={<GenresListContainer />} />
          <Route path="/authors" element={<AuthorsListContainer />} />
          <Route path="/books" element={<AuthorBooks />}>
            <Route path=":bookId" element={<AuthorBooks />}/>
          </Route>
        </Routes>
        <FooterContainer /> */}
      </div>
    </div>
  );
}

export default App;
