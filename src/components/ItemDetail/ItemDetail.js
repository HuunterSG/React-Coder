import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name,price,img,stock,description}) => {
    console.log('estoy en el item detail')
    console.log(typeof name)
    console.log(typeof price)

    const onAdd = (quantity) => {
        console.log(quantity)
    }
    
    return (
        <div className="contDetail">
            <div className="contDetailImg">
                <img src={img} alt="producto" className="Detailimg"/>
            </div>
            <div className="contDetailText">
            <h2 className="contDetailTitle">{name}</h2>
            <p className="contDetailP">{description}</p>
            <p className="DetailPrice">${price}</p>
            </div>
            <div>
                <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail