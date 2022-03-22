
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    
      <header className="App-header">
        
        <NavBar>
        </NavBar>
        <ItemlistContainer greeting="Bienvenido a nuestra tienda"/>
      </header>
    
  );
}

export default App;
