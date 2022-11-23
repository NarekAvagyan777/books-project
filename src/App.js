import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GenresList from './components/Genres/GenresList';
import AuthorsList from './components/Authors/AuthorsList';
import Content from './components/Content/Content';
import BookInfo from './components/BookInfo/BookInfo';
import SubjectWorks from './components/Genres/SubjectWorks/SubjectWorks';
import SelectedAuthor from './components/Authors/SelectedAuthor/SelectedAuthor';
import SearchResult from './components/SearchResult/SearchResult';

function App() {

  return (
    <div className="app-wrapper">
      <div className="container mx-auto">
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          
          <Route path="genres" element={<GenresList />} />
          <Route path="genres/:genre/:page" element={<SubjectWorks />} />
          
          <Route path="authors" element={<AuthorsList />} />
          <Route path="authors/:author/:page" element={<SelectedAuthor />} />

          <Route path="books" element={<BookInfo />}>
            <Route path=":bookId" element={<BookInfo />} />
          </Route>

          <Route path="search/:search/:page" element={<SearchResult />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
