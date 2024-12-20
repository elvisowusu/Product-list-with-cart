import PropTypes from "prop-types";
import addToCart from "../../assets/icon-add-to-cart.svg";
import { productImages } from "../../data/productImages";
export const ProductsCard = ({ item }) => {
  const images = productImages[item.key];
  return (
    <div className="product-card">
      <section className="relative h-[14.6rem] lg:h-[16.375rem]  mb-6">
        {/* <img src={item.img} alt="" className="product-img" /> */}
        {/* Images for responsive breakpoints */}
        <img
          src={images.mobile}
          alt={item.name}
          className="block md:hidden product-img"
        />
        <img
          src={images.tablet}
          alt={item.name}
          className="hidden md:block lg:hidden  product-img"
        />
        <img
          src={images.desktop}
          alt={item.name}
          className="hidden lg:block product-img"
        />
        <button className="add-to-cart">
          {" "}
          <img src={addToCart} width={20} alt="" />
          Add to Cart
        </button>
      </section>
      <section className="h-[4.4rem]">
        <h1 className="text-sm text-[#87635A]">{item.name}</h1>
        <h2 className="font-semibold">{item.description}</h2>
        <p className="text-[#C73B0F] font-semibold">{item.price}</p>
      </section>
    </div>
  );
};

// Prop Validation
ProductsCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
};
