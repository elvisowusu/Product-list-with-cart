import PropTypes from "prop-types";
import carbonNeutral from "../assets/icon-carbon-neutral.svg";
import remove from "../assets/icon-remove-item.svg";

export const CartDisplay = ({
  cart,
  title,
  showCarbonNeutral,
  actionButton,
  removeBtn,
}) => {
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart
    .reduce((sum, item) => sum + (item.accumulatedPrice || 0), 0)
    .toFixed(2);

  return (
    <div className="cart-items gap-6">
      {title && (
        <h1 className="font-bold text-[1.5rem] text-[#C73B0F] mb-[1rem] w-full">
          {title} ({totalQuantity})
        </h1>
      )}
      {cart.map(({ id, name, quantity, price, accumulatedPrice }) => (
        <section
          key={id}
          className="flex w-full justify-between items-center outline-none border-b border-[#F5EEEC] pb-4"
        >
          <div className="w-[60%] sm:w-[40%]">
            <h2 className="font-semibold mb-2">{name}</h2>
            <div className="flex justify-between">
              <p className="text-[#C73B0F] font-semibold">
                <span>{quantity}</span>x
              </p>
              <p className="text-[#87635A]">
                @ ${parseFloat(price).toFixed(2)}
              </p>
              <p className="text-[#87635A] font-semibold">
                ${parseFloat(accumulatedPrice).toFixed(2)}
              </p>
            </div>
          </div>
          {showCarbonNeutral && (
            <button onClick={() => removeBtn.removeFromCart(id)}>
              <img
                src={remove}
                alt="Remove"
                className="rounded-full border border-[#AD8A85] p-[0.1rem]"
                width={17}
                height={17}
              />
            </button>
          )}
        </section>
      ))}
      <section className="flex justify-between items-center w-full">
        <h2>Order Total</h2>
        <h2 className="font-bold text-[1.6rem]">${total}</h2>
      </section>
      {showCarbonNeutral && (
        <section className="p-4 flex w-full justify-center gap-1 bg-[#FCF8F6] rounded-lg">
          <img src={carbonNeutral} alt="Carbon Neutral" />
          <p className="text-[#260F08]">
            This is a <span className="font-semibold">carbon-neutral</span>{" "}
            delivery
          </p>
        </section>
      )}
      {actionButton && actionButton}
    </div>
  );
};

// Prop Validation
CartDisplay.propTypes = {
    cart: PropTypes.arrayOf(
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
    ).isRequired, // The cart prop must be an array of items and is required.
  
    title: PropTypes.string, // The title is optional and should be a string.
  
    showCarbonNeutral: PropTypes.bool, // A boolean to conditionally display the carbon-neutral message.
  
    actionButton: PropTypes.node, // An optional React node for the action button.
  
    removeBtn: PropTypes.shape({
      removeFromCart: PropTypes.func.isRequired, // Must include a removeFromCart function if provided.
    }), // Optional; only required if removeBtn is passed.
  };