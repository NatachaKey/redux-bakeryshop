import './App.css';
import Cart from './Components/Cart/Cart';
import Desserts from './Components/DessertsComponents/Desserts';
import AllCategories from './Components/Filter/AllCategories';


function App() {
  return (
    <div className="App">
    
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

export default App;
