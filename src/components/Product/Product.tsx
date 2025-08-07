import type { ProductInfo } from "../../model/product";
import { useAppDispatch } from "../../store";
import { addProduct } from "../../store/features/cartSlice";
import S from "./Product.module.css";

export function Product({ data }: { data: ProductInfo }) {
  const { price, id } = data;
  const dispatch = useAppDispatch();

  const add = () => {
    dispatch(
      addProduct({
        productId: id,
        total: price,
        quantity: 1,
      })
    );
  };
  return (
    <div className={S.container}>
      <h2 className={S.title}>{data.title}</h2>
      <div className={S.price}>${data.price}</div>
      {data.inStock ? (
        <button className={S.button} onClick={add}>
          Добавить в корзину
        </button>
      ) : (
        <button className={S.button} disabled>
          Нет в наличии
        </button>
      )}
    </div>
  );
}
