import './App.css';
import Form from './components/header/Form';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import AppRouter from './router/AppRouter';

function App() {
  
  return (
    <div className="App">

      <AppRouter/>
      <Header/>

     
    </div>
  );
}

export default App;
