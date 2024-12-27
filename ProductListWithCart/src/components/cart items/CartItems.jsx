import emptyCartImg from "../../assets/illustration-empty-cart.svg";
import { useOrderProduct } from "../../hooks/useOrderProduct";
import { CartDisplay } from "../CartDisplay";

export const CartItems = () => {
  const { cart, cartFunctions, orderFunc } = useOrderProduct();
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <CartDisplay
      title="Your Cart"
      cart={cart}
      removeBtn={cartFunctions}
      showCarbonNeutral={true}
      actionButton={
        <button
          onClick={orderFunc}
          className="w-full rounded-3xl bg-[#C73B0F] h-[3.3rem] text-white text-[1rem] font-semibold"
        >
          Confirm Order
        </button>
      }
    />
  );
};

const EmptyCart = () => (
  <div className="cart-items">
    <h1 className="font-bold text-[1.5rem] text-left w-full text-[#C73B0F] mb-[1rem] ">
      Your Cart (0)
    </h1>
    <div className="p-[1rem] flex items-center justify-center flex-col">
      <img className="h-[8rem]" src={emptyCartImg} alt="Empty Cart" />
      <p className="text-[0.88rem] text-[#87635A]">
        Your added items will appear here
      </p>
    </div>
  </div>
);
