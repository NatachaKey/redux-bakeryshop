import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import About from './About';

import './App.css';
import Contacts from './Contacts';
import Shop from './Shop';





function App() {

  
  return (
      <Shop/>
  <Router>
<nav>
     <Link className='linkStyle' to="/">Shop</Link>
      <Link className='linkStyle' to="/About">About</Link>
       <Link className='linkStyle' to="/Contacts">Contacts</Link>
</nav>




    <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contacts' element={<Contacts/>} />
    </Routes>

 </Router>

  );
}

export default App;



