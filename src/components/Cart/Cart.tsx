import { useAppSelector } from "../../store";
import {
  selectCartTotal,
  selectTotalQuantity,
} from "../../store/features/cartSlice";
import S from "./Cart.module.css";

export function Cart() {
  const total = useAppSelector(selectCartTotal);
  const quantity = useAppSelector(selectTotalQuantity);
  return (
    <div className={S.container}>
      🛒({quantity}/${total})
    </div>
  );
}
