import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

const Main = () => {

    const dispatch = useDispatch()
    const result = useSelector(state => state.productData)
    console.log(result)
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
        <button
            onClick={() => {
            dispatch(emptyCart());
            }}
        >
            Empty Cart
        </button>
        <button
            onClick={() => {
            dispatch(productList());
            }}
        >
            Get Product List
        </button>
        </div>
    </div>
  )
}

export default Main