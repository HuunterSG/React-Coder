import ItemList from "../ItemList/ItemList"
function ItemlistContainer({greeting}){
    return(
        <div>
            <h2 className="greeting">{greeting}</h2>
            <ItemList/>
        </div>
    )
}

export default ItemlistContainer