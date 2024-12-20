import { CartItems } from "../cart items/CartItems";
import { ProductList } from "../product list/ProductList";

export const Cart = () => {
  return (
    <div className="cart">
      <ProductList />
      <CartItems />
    </div>
  );
};
