import React, { useState } from "react"
import ShoppingItem from "./ShoppingItem"


const ShoppingList = () => {
const [cart, setCart] = useState([
    {
        id: 1,
        name: "shoes",
        price: 1000
    },
    {
        id: 1,
        name: "shirt",
        price: 2000
    },
    {
        id: 1,
        name: "pants",
        price: 500
    },
])

return(
    <>
    {
        cart.map(item => (
            <ShoppingItem item={item}/>
        ))
    }
    </>
)
}


export default ShoppingList