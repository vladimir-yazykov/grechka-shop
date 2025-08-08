import type { ProductInfo } from "../../model/product";
import { Product } from "../product/Product/Product";
import S from "./ProductsList.module.css";

export function ProductsList({ products }: { products: ProductInfo[] }) {
  return (
    <div className={S.container}>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}
