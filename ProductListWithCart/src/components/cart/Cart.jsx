import { useOrderProduct } from "../../hooks/useOrderProduct";
import { CartItems } from "../cart items/CartItems";
import { ConfirmOrder } from "../comfirm order/ConfirmOrder";
import { ProductList } from "../product list/ProductList";

export const Cart = () => {
  const { confirm } = useOrderProduct();
  return (
    <div className="cart">
      <ProductList />
      <CartItems />
      {confirm && <ConfirmOrder />}
    </div>
  );
};
