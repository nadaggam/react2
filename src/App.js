import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { MySlider } from './components/MySlider';
import { MyCard } from './components/MyCard';
import { MyJpg } from './components/MyJpg';
import { Image } from './components/Image';
import { Footer } from './components/Footer';
import { Slides } from './components/Slides';
import { Read } from './components/Read';
import { Back } from './components/Back';
import { Products } from './components/Products';
import { Login } from './components/Login';
import  AboutUs  from './components/AboutUs';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import {Delete} from './components/Delete'
import { ProductForm } from './components/ProductForm';
function App() {
  return (
    <div className="App">
    <MyNav />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='Products' element={<Products />} />
        <Route path='read' element={<Read />} />
        {/* <Route path='Products/:id' element={<ProductDetails />} /> */}
        <Route path='*' element={<NotFound />} />
        <Route path='products/:id/edit' element={<ProductForm />} />
        
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
