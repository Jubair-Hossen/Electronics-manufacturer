import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
