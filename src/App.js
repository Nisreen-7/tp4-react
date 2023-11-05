
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsList from './components/ProductsList';

import { Routes,Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
   <Navbar />

   <Routes>
    <Route path="/" element={
              <>
                  <Slider />
                  <ProductsList />
              </>
            }> 
    </Route>
    <Route path="About" element={ <> <About /> </>}></Route>
   </Routes>
  
  
    </div>
  );
}

export default App;
