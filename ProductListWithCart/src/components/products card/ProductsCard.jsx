import PropTypes from "prop-types";
import addToCart from "../../assets/icon-add-to-cart.svg";
import increaseNum from "../../assets/icon-increment-quantity.svg";
import decreaseNum from "../../assets/icon-decrement-quantity.svg";
import { productImages } from "../../data/productImages";
import { useOrderProduct } from "../../hooks/useOrderProduct";
export const ProductsCard = ({ product }) => {
  const { cart, cartFunctions } = useOrderProduct();
  const productInCart = cart.find((cartItem) => cartItem.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 0;

  const images = productImages[product.key];

  return (
    <div className="product-card">
      <section className="relative h-[14.6rem] lg:h-[16.375rem]  mb-6">
        {/* <img src={item.img} alt="" className="product-img" /> */}
        <img
          src={images.mobile}
          alt={product.name}
          className={`block md:hidden product-img border-2 ${
            quantity > 0 ? `border-[#C73B0F]` : ``
          } outline-none`}
        />
        <img
          src={images.tablet}
          alt={product.name}
          className={`hidden md:block lg:hidden  product-img border-2 ${
            quantity > 0 ? `border-[#C73B0F]` : ``
          } outline-none`}
        />
        <img
          src={images.desktop}
          alt={product.name}
          className={`hidden lg:block product-img border-2 ${
            quantity > 0 ? `border-[#C73B0F]` : ``
          } outline-none`}
        />
        {quantity === 0 ? (
          <button
            onClick={() => cartFunctions.addToCart(product)}
            className="add-to-cart"
          >
            {" "}
            <img src={addToCart} width={20} alt="" />
            Add to Cart
          </button>
        ) : (
          <div className="add-to-cart hover:text-white bg-[#C73B0F] text-white border-none flex justify-evenly items-center">
            <img
              src={decreaseNum}
              onClick={() => cartFunctions.reduceQuantity(product.id)}
              alt=""
              className="cursor-pointer rounded-full border px-[0.1rem] py-[0.3rem]"
            />
            <p>{quantity}</p>
            <img
              src={increaseNum}
              onClick={() => cartFunctions.addToCart(product)}
              alt=""
              className="cursor-pointer rounded-full border p-[0.1rem]"
            />
          </div>
        )}
      </section>
      <section className="h-[4.4rem]">
        <h1 className="text-sm text-[#87635A]">{product.name}</h1>
        <h2 className="font-semibold">{product.description}</h2>
        <p className="text-[#C73B0F] font-semibold">{product.price}</p>
      </section>
    </div>
  );
};

// Prop Validation
ProductsCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};
