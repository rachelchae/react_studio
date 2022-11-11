import "./BakeryItem.css"

// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    //props makes it different each time 
    return (
        <div className="BakeryItem">
            <h1> {props.item.name}</h1>
            <p> Description: {props.item.description} </p>
            <p> Price: {props.item.price} </p>
            <img src={props.item.image}/>
            <button onClick={() => {props.addToCart(props.item)}}> Add to Cart </button>
        </div>

    )
}

export default BakeryItem