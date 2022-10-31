import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <div className="content-wrapper container-lg">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
