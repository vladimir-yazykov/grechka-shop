import { useAppSelector } from "../../store";
import { selectCartTotal } from "../../store/features/cartSlice";
import S from "./Cart.module.css";

export function Cart() {
  const total = useAppSelector(selectCartTotal);
  return <div className={S.container}>🛒(${total})</div>;
}
