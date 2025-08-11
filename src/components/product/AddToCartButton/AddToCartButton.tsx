import type { ProductInfo } from "../../../model/product";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  addProduct,
  selectCartItemById,
} from "../../../store/features/cartSlice";
import { ProductQuantityButton } from "../ProductQuantityButton/ProductQuantityButton";
import S from "./AddToCartButton.module.css";

export function AddToCartButton({ product }: { product: ProductInfo }) {
  const { id, price } = product;
  const dispatch = useAppDispatch();
  const item = useAppSelector(selectCartItemById(id));

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
    <>
      {item?.quantity ? (
        <ProductQuantityButton item={item} />
      ) : (
        <button className={S.button} onClick={add}>
          Добавить в корзину
        </button>
      )}
    </>
  );
}
