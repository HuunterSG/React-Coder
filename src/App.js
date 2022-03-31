
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemlistContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/home' element={<ItemlistContainer/>} />
            <Route path='/category/:typeId' element={<ItemlistContainer/>}/>
            <Route path='/Item/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
