import type { CartItem } from "../../../model/cart";
import type { ProductInfo } from "../../../model/product";
import { useAppDispatch } from "../../../store";
import { addProduct, removeProduct } from "../../../store/features/cartSlice";
import * as C from "./ProductQuantityButton.components";

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
    <C.Container>
      <C.Button onClick={remove}>-</C.Button>
      <C.Quantity>{item.quantity}</C.Quantity>
      <C.Button onClick={add}>+</C.Button>
    </C.Container>
  );
}
