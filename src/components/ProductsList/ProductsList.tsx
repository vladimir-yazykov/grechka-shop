import type { ProductInfo } from "../../model/product";
import { Product } from "../product/Product/Product";
import * as C from "./ProductsList.components";

export function ProductsList({ products }: { products: ProductInfo[] }) {
  return (
    <C.Container>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </C.Container>
  );
}
