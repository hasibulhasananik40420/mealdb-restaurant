import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Meal from './Components/Meal/Meal';
import Navbar from './Components/Navbar/Navbar';
import Restaurant from './Components/Restaurant/Restaurant';

function App() {
  return (
    <div >
       <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shops' element={<Restaurant></Restaurant>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/meal/:id' element={<Meal></Meal>}> </Route>
      </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
