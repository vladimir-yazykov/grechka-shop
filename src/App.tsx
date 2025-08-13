import * as C from "./App.components";
import { AppProvider } from "./components/AppProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { products } from "./data/products";

function App() {
  return (
    <AppProvider>
      <C.Container>
        <Cart />
        <ProductsList products={products} />
      </C.Container>
    </AppProvider>
  );
}

export default App;
