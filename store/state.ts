import { ProductItem } from "../global";

const INITIAL_STATE: ProductItem[] = [
  {
    id: "1",
    title: "Item 1",
    description: "Dark grey t-shirt",
    imageUrl: "/images/items/1.jpg",
    price: 10,
    quantity: 0,
  },
  {
    id: "2",
    title: "Item 2",
    description: "Green t-shirt",
    imageUrl: "/images/items/2.jpg",
    price: 17.5,
    quantity: 0,
  },
  {
    id: "3",
    title: "Item 3",
    description: "Red polo shirt",
    imageUrl: "/images/items/3.jpg",
    price: 22,
    quantity: 0,
  },
  {
    id: "4",
    title: "Item 4",
    description: "Red Punisher t-shirt",
    imageUrl: "/images/items/4.jpg",
    price: 35,
    quantity: 0,
  },
];

export { INITIAL_STATE };
