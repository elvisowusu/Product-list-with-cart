import emptyCartImg from "../../assets/illustration-empty-cart.svg";
export const CartItems = () => {
  return (
    <div className="h-fit rounded-md p-6 bg-white flex flex-col items-center justify-center">
      <h1 className="font-bold text-[1.5rem] text-[#C73B0F] mb-[1rem] w-full">Your Cart(0)</h1>
      {emptyCart()}
    </div>
  );
};

const emptyCart = () => {
  return (
    <div className="border p-[1rem] flex items-center justify-center flex-col">
      <img className="h-[8rem]" src={emptyCartImg} alt="" />
      <p className="text-[0.88rem] text-[#87635A] ">
        Your added items will appear here
      </p>
    </div>
  );
};
