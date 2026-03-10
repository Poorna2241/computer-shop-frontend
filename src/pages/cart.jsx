import { getCart } from "../utils/cart";
import { useEffect, useState } from "react";

export default function Cart() {
const [cart, setCart] = useState(getCart());

useEffect(()=>{
    const cart = getCart();
    setCart(cart);
}, [])

    return (
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center text-4xl text-primary">
           { cart.map(
                (item) => {
                return(
                    <div className="w-[400px] h-[200px] bg-secondary rounded-lg flex items-center gap-[20px] p-[20px]">
                        <img src={item.image} alt={item.name} className="w-[160px] h-full object-cover rounded-lg"/>
                        <div className="flex flex-col gap-[10px]">
                            <h1>{item.name}</h1>
                            <h2>Price: ${item.price}</h2>
                            <h2>Quantity: {item.quantity}</h2>
                        </div>
                    </div>
                )
             })    } 

        </div>
    )
}