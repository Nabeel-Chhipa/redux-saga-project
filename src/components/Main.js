import { addToCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Main = () => {

    const dispatch = useDispatch()
    const productData = {
        id: 1,
        name: 'T-shirt',
        price: 200,
        category: 'Men'
    } 
  return (
    <div>
        <div className="contentWrapper">
        <button
            onClick={() => {
            dispatch(addToCart(productData));
            }}
        >
            Add To Cart
        </button>
        <button
            onClick={() => {
            dispatch(removeToCart(productData.id));
            }}
        >
            Remove To Cart
        </button>
        </div>
    </div>
  )
}

export default Main