import type { ProductInfo } from "../../../model/product";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import S from "./Product.module.css";

export function Product({ data }: { data: ProductInfo }) {
  return (
    <div className={S.container}>
      <h2 className={S.title}>{data.title}</h2>
      <div className={S.price}>${data.price}</div>
      {data.inStock ? (
        <AddToCartButton product={data} />
      ) : (
        <button className={S.button} disabled>
          Нет в наличии
        </button>
      )}
    </div>
  );
}
