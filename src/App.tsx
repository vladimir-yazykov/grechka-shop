import S from "./App.module.css";
import { AppProvider } from "./components/AppProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { products } from "./data/products";

function App() {
  return (
    <AppProvider>
      <div className={S.container}>
        <Cart />
        <ProductsList products={products} />
      </div>
    </AppProvider>
  );
}

export default App;
