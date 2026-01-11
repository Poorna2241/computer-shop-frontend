function ProductCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt={props.name} />
            <p>price: {props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default ProductCard;