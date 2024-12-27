
import orderConfirmed from "../../assets/icon-order-confirmed.svg";
import { useOrderProduct } from "../../hooks/useOrderProduct";
import { CartDisplay } from "../CartDisplay";

export const ConfirmOrder = () => {
  const { cart, orderFunc } = useOrderProduct();

  return (
    <div className="fixed top-0 left-0 h-[100vh] w-full bg-[#00000080] flex flex-col justify-center items-center">
      <div className="absolute bottom-0 sm:relative bg-white rounded-t-xl sm:rounded-xl p-[1rem]  w-full sm:w-[55%] md:w-max">
        <section>
          <img src={orderConfirmed} className="w-[2rem] mb-3" alt="Order Confirmed" />
          <div>
            <h1 className="font-bold text-[2.2rem] leading-[2.5rem]">Order Confirmed</h1>
            <p className="text-[#87635A] text-sm">We hope you enjoy your food!</p>
          </div>
        </section>
        <CartDisplay cart={cart} showCarbonNeutral={false} />
        <button onClick={orderFunc} className="w-full rounded-3xl bg-[#C73B0F] h-[2.4rem] text-white text-[1rem] font-semibold">
          Start New Order
        </button>
      </div>
    </div>
  );
};
