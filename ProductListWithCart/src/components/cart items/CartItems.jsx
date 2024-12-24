import emptyCartImg from "../../assets/illustration-empty-cart.svg";
import remove from "../../assets/icon-remove-item.svg";
import carbonNeutral from "../../assets/icon-carbon-neutral.svg";
export const CartItems = () => {
  const newProd = [
    { name: "name", quantity: 1, markedPrice: 2.2, accumulatedPrice: 12 },
    { name: "hello", quantity: 1, markedPrice: 2.2, accumulatedPrice: 12 },
  ];
  return (
    <div className="cart-items">
      <h1 className="font-bold text-[1.5rem] text-[#C73B0F] mb-[1rem] w-full">
        Your Cart({newProd.length})
      </h1>
      {newProd.length === 0 ? (
        <EmptyCart />
      ) : (
        <SelectedCart selected={newProd} />
      )}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="p-[1rem] flex items-center justify-center flex-col">
      <img className="h-[8rem]" src={emptyCartImg} alt="" />
      <p className="text-[0.88rem] text-[#87635A] ">
        Your added items will appear here
      </p>
    </div>
  );
};

const SelectedCart = ({ selected }) => {
  return (
    <div className="w-full text-[0.9rem] md:text-[1rem] flex flex-col gap-6">
      {selected.map((prod, index) => {
        return (
          <ProductSelected
            key={index}
            name={prod.name}
            quantity={prod.quantity}
            markedPrice={prod.markedPrice}
            accumulatedPrice={prod.accumulatedPrice}
          />
        );
      })}
      <section className="flex justify-between items-center">
        <h2>Order Total</h2>
        <h2 className="font-bold text-[1.6rem]">
          $<span>{ "total"}</span>
        </h2>
      </section>
      <section className="p-4 flex w-full justify-center gap-1 bg-[#FCF8F6] rounded-lg">
        <img src={carbonNeutral} alt="" />
        <p className="text-[#260F08]">
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </section>
      <button className="w-full rounded-3xl bg-[#C73B0F] h-[3.3rem] text-white text-[1rem] font-semibold">
        Confirm Order
      </button>
    </div>
  );
};

const ProductSelected = ({ name, quantity, markedPrice, accumulatedPrice }) => {
  return (
    <section className="flex w-full justify-between items-center outline-none border-b border-[#F5EEEC] pb-4">
      <div className="w-[60%] sm:w-[40%]">
        <h2 className="font-semibold mb-2">{name}</h2>
        <div className="flex justify-between">
          <p className="text-[#C73B0F] font-semibold">
            <span>{quantity}</span>x
          </p>
          <p className="text-[#87635A]">
            @ $<span>{markedPrice}</span>
          </p>
          <p className="text-[#87635A] font-semibold">
            $<span>{accumulatedPrice}</span>
          </p>
        </div>
      </div>
      <button>
        <img
          src={remove}
          alt="remove"
          className="rounded-full border border-[#AD8A85] p-[0.1rem]"
          width={17}
          height={17}
        />
      </button>
    </section>
  );
};
