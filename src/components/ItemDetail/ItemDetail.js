import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name,price,img,stock,description}) => {
    console.log('estoy en el item detail')
    console.log(typeof name)
    console.log(typeof price)

    const onAdd = (quantity) => {
        console.log(quantity)
    }
    
    return (
        <div>
            <div>
                <img src={img} alt="producto"/>
            </div>
            <div>
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
            <p>{price}</p>
            <div>
                <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail