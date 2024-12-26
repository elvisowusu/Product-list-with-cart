import PropTypes from "prop-types";
import emptyCartImg from "../../assets/illustration-empty-cart.svg";
import remove from "../../assets/icon-remove-item.svg";
import carbonNeutral from "../../assets/icon-carbon-neutral.svg";
import { useOrderProduct } from "../../hooks/useOrderProduct";

export const CartItems = () => {
  const { cart, cartFunctions } = useOrderProduct();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartFunctions.calculateTotal();

  return (
    <div className="cart-items">
      <h1 className="font-bold text-[1.5rem] text-[#C73B0F] mb-[1rem] w-full">
        Your Cart ({totalQuantity})
      </h1>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <SelectedCart
          selected={cart}
          cartFunctions={cartFunctions}
          total={total}
        />
      )}
    </div>
  );
};

const EmptyCart = () => (
  <div className="p-[1rem] flex items-center justify-center flex-col">
    <img className="h-[8rem]" src={emptyCartImg} alt="Empty Cart" />
    <p className="text-[0.88rem] text-[#87635A]">
      Your added items will appear here
    </p>
  </div>
);

const SelectedCart = ({ selected, cartFunctions, total }) => (
  <div className="w-full text-[0.9rem] md:text-[1rem] flex flex-col gap-6">
    {selected.map((prod) => (
      <ProductSelected
        key={prod.id}
        id={prod.id}
        name={prod.name}
        quantity={prod.quantity}
        markedPrice={parseFloat(prod.price) || 0} // Ensure markedPrice is a number
        accumulatedPrice={parseFloat(prod.accumulatedPrice) || 0} // Ensure accumulatedPrice is a number
        cartFunctions={cartFunctions}
      />
    ))}
    <section className="flex justify-between items-center">
      <h2>Order Total</h2>
      <h2 className="font-bold text-[1.6rem]">${total}</h2>
    </section>
    <section className="p-4 flex w-full justify-center gap-1 bg-[#FCF8F6] rounded-lg">
      <img src={carbonNeutral} alt="Carbon Neutral" />
      <p className="text-[#260F08]">
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>
    </section>
    <button className="w-full rounded-3xl bg-[#C73B0F] h-[3.3rem] text-white text-[1rem] font-semibold">
      Confirm Order
    </button>
  </div>
);

const ProductSelected = ({
  id,
  name,
  quantity,
  markedPrice,
  accumulatedPrice,
  cartFunctions,
}) => (
  <section className="flex w-full justify-between items-center outline-none border-b border-[#F5EEEC] pb-4">
    <div className="w-[60%] sm:w-[40%]">
      <h2 className="font-semibold mb-2">{name}</h2>
      <div className="flex justify-between">
        <p className="text-[#C73B0F] font-semibold">
          <span>{quantity}</span>x
        </p>
        <p className="text-[#87635A]">@ ${markedPrice.toFixed(2)}</p>
        <p className="text-[#87635A] font-semibold">
          ${accumulatedPrice.toFixed(2)}
        </p>
      </div>
    </div>
    <button onClick={() => cartFunctions.removeFromCart(id)}>
      <img
        src={remove}
        alt="Remove"
        className="rounded-full border border-[#AD8A85] p-[0.1rem]"
        width={17}
        height={17}
      />
    </button>
  </section>
);

// Prop Validation
SelectedCart.propTypes = {
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      accumulatedPrice: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })
  ).isRequired,
  cartFunctions: PropTypes.shape({
    removeFromCart: PropTypes.func.isRequired,
  }).isRequired,
  total: PropTypes.string.isRequired, // Total is returned as a string from `toFixed()`
};

ProductSelected.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  markedPrice: PropTypes.number.isRequired,
  accumulatedPrice: PropTypes.number.isRequired,
  cartFunctions: PropTypes.shape({
    removeFromCart: PropTypes.func.isRequired,
  }).isRequired,
};
