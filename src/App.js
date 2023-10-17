import './App.css';
import Landing from './Pages/Landing/Landing';
import Product from './Pages/Product/Product';
import SideNavbar from './Pages/SideNavbar/SideNavbar';
import Customer from './Pages/Customer/Customer';

import {BrowserRouter, Routes,Route, } from 'react-router-dom';
import Income from './Pages/Income/Income';
import Promate from './Pages/Promate/Promate';
import { Help } from './Pages/Help/Help';
function App() {
  return (
    <div className='bg-slate-100 h-[100%]'>
    <div className='flex flex-row '>
     <div className='w-[250px]'><SideNavbar/></div> 
      <Routes>
        <Route path='/dashboard' index={true} element={<Landing/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/income' element={<Income/>}/>
        <Route path='/promote' element={<Promate/>}/>
        <Route path='/help' element={<Help/>}/>



      </Routes>
      
    </div>
    </div>
  );
}

export default App;
