import { CartItems } from "../cart items/CartItems";
import { ProductList } from "../product list/ProductList";

export const Cart = () => {
  return (
    <div className="bg-[#FCF8F6] font-redHatText p-[1.5rem] lg:py-[4rem] lg:px-[6rem] flex flex-col lg:flex-row gap-4 lg:gap-x-8">
      <ProductList />
      <CartItems />
    </div>
  );
};
