import { useDispatch } from 'react-redux';
import dataDesserts from '../../data/dataDesserts';
import {  removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem})=> {

    const desserts= dataDesserts.find(item=> item.id === cartItem.dessertId)
    const dispatch= useDispatch();

    return <div>
        <img src={`./${desserts.img}.jpg`} alt="cart item" width="100px"/>
       <p>{desserts.name}</p>
       <p>{cartItem.quantity}portion(s) ${desserts.price * cartItem.quantity }   <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delete'/> 
        </span>
       </p>  
    </div>  
}

export default CartItem;

/* ---> 
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import dataDesserts from '../../data/dataDesserts';
import {  removeItemFromCart, getCartItems, updateQuantity, addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from './ChangeQuantity';

const CartItem = ({cartItem})=> {
   const [quantity, setQuantity] = useState(1);
    const desserts= dataDesserts.find(item=> item.id === cartItem.dessertId)
    const dispatch= useDispatch();

    const items = useSelector(getCartItems);
    const itemsInCart = items.some(item => item.dessertId === item.id);
    
    const addToCart = () => {
    if (!itemsInCart) {
        dispatch(addItemToCart({cartItem, quantity}));
        setQuantity(1)
    } else {
        dispatch(updateQuantity({cartItem, quantity}))
        setQuantity(1)
    }
}
    return(
    <div>
    <div>
        <img src={`./${desserts.img}.jpg`} alt="cart item" width="100px"/>
       <p>{desserts.name}</p>
       <p>{cartItem.quantity}portion(s) ${desserts.price * cartItem.quantity }   <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt='delete'/> 
       </span>
         </p>  
    </div>
    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      <button onClick={addToCart}>click</button> 
    </div>
    
    )
}
export default CartItem;
*/
