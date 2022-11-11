import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, countTotalPrice] = useState(0);

  function addToCart(item) {
    setCartItems([...cartItems, item]) //cartItems is an array and the ... expands the array and this new item is appended to this array 
    countTotalPrice(totalPrice + 1)
  }

  function calculateTotal() {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
    }
    return total
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      <div className="bakery-container"> 
        {bakeryData.map((item, index) => ( 
          // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item} addToCart={addToCart}/> // this maps each bakery item to its data!
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <div> 
          { cartItems.map((item, index)=> <p> {item.name} </p>)}
          <h2> Price: {calculateTotal()} </h2>

        </div>
        
      </div>
    </div>
  );
}

export default App;
