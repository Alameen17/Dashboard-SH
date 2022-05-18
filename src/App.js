import './App.css';
import Clients from './componenets/clients/Clients';
import Products from './componenets/products/product';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/clients' element = {<Clients/>}></Route>
          <Route path='/Products' element = {<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
