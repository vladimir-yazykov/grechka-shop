import type { ProductInfo } from "../model/product";

export const products: ProductInfo[] = [
  {
    id: 1,
    price: 2,
    sku: "grechka",
    productionDate: "01-01-2010",
    title: "Гречка",
    inStock: true,
  },
  {
    id: 2,
    price: 10,
    sku: "kefir",
    productionDate: "01-01-2020",
    title: "Кефир",
    inStock: true,
  },
  {
    id: 3,
    price: 2,
    sku: "balala",
    productionDate: "01-01-1905",
    title: "Балалайка",
    inStock: false,
  },
  {
    id: 4,
    price: 200,
    sku: "lenin",
    productionDate: "01-04-2000",
    title: "Портрет ленина",
    inStock: false,
  },
  {
    id: 5,
    price: 10,
    sku: "ogurek",
    productionDate: "01-01-2027",
    title: "Огурец",
    inStock: true,
  },
];
