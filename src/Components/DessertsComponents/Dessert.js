import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dessert = ({dessert})=> {
    const [quantity, setQuantity]= useState(1);
    const dispatch= useDispatch();
    return(<div>
        <br/>
        <img src={`./${dessert.img}.jpg`} alt="dessertImage" width="400px"/>
        <h3>{dessert.name}</h3>
        <p>${dessert.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <br/>
        <button onClick={() => {dispatch(addItemToCart({dessert,quantity}))}}>Add to cart</button>
        <br/>
    </div>)
}

export default Dessert;