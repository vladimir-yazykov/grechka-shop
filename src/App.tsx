import "./App.css";
import { AppProvider } from "./components/AppProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { products } from "./data/products";

function App() {
  return (
    <AppProvider>
      <Cart />
      <ProductsList products={products} />
    </AppProvider>
  );
}

export default App;
