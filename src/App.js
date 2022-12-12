import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const productData = {
    name: 'T-shirt',
    price: 200,
    category: 'Men'
  } 
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addToCart(productData));
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default App;
