import type { CartItem } from "../../../model/cart";
import type { ProductInfo } from "../../../model/product";
import { useAppDispatch } from "../../../store";
import { addProduct, removeProduct } from "../../../store/features/cartSlice";
import S from "./ProductQuantityButton.module.css";

export function ProductQuantityButton({
  item,
  product,
}: {
  item: CartItem;
  product: ProductInfo;
}) {
  const dispatch = useAppDispatch();
  const { productId } = item;

  const remove = () => {
    dispatch(
      removeProduct({
        productId,
        quantity: 1,
        total: product.price,
      })
    );
  };

  const add = () => {
    dispatch(
      addProduct({
        productId,
        quantity: 1,
        total: product.price,
      })
    );
  };
  return (
    <div className={S.container}>
      <button className={S.button} onClick={remove}>
        -
      </button>
      <div className={S.quantity}>{item.quantity}</div>
      <button className={S.button} onClick={add}>
        +
      </button>
    </div>
  );
}
