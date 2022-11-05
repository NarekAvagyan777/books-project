import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer';
import GenresListContainer from './Genres/GenresListContainer';
import AuthorsListContainer from './Authors/AuthorsListContainer';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="app-wrapper">
      <div className="content-wrapper container-lg">
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/genres" element={<GenresListContainer />} />
          <Route path="/authors" element={<AuthorsListContainer />} />
        </Routes>
        <FooterContainer />
      </div>
    </div>
  );
}

export default App;
