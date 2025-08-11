import type { CartItem } from "../../../model/cart";
import S from "./ProductQuantityButton.module.css";

export function ProductQuantityButton({ item }: { item: CartItem }) {
  return (
    <div className={S.container}>
      <button className={S.button}>-</button>
      <div className={S.quantity}>{item.quantity}</div>
      <button className={S.button}>+</button>
    </div>
  );
}
