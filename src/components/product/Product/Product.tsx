import type { ProductInfo } from "../../../model/product";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import * as C from "./Product.components";

export function Product({ data }: { data: ProductInfo }) {
  return (
    <C.Container>
      <C.Title>{data.title}</C.Title>
      <C.Price>${data.price}</C.Price>
      {data.inStock ? (
        <AddToCartButton product={data} />
      ) : (
        <C.NotInStock disabled>Нет в наличии</C.NotInStock>
      )}
    </C.Container>
  );
}
