import { useAppSelector } from "../../store";
import {
  selectCartTotal,
  selectTotalQuantity,
} from "../../store/features/cartSlice";
import * as C from "./Cart.components";

export function Cart() {
  const total = useAppSelector(selectCartTotal);
  const quantity = useAppSelector(selectTotalQuantity);
  return (
    <C.Container>
      🛒({quantity}/${total})
    </C.Container>
  );
}
