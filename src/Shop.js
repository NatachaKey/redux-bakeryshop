import './App.css';
import Cart from './Components/Cart/Cart';
import Desserts from './Components/DessertsComponents/Desserts';
import AllCategories from './Components/Filter/AllCategories';
import Particless from './Particless';

function Shop() {

  return ( 
<div className="App">
      <Particless/> 
<div className="block">
    <AllCategories/>
     <Desserts /> 
</div>      
<div className="block">
  <Cart/>
</div>
    
</div>
  );
}

export default Shop;
