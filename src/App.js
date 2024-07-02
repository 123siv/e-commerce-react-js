
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/shop';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<shopCategory category="men"/>}/>
          <Route path='/womens' element={<shopCategory category="women"/>}/>
          <Route path='/kids' element={<shopCategory category="kid"/>}/>
          <Route path='product' element={<product/>}>
            <Route path=':productId' element={<product/>}/>
          </Route>
          <Route path='/cart' element={<cart/>}/>
          <Route path='/login' element={<loginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
