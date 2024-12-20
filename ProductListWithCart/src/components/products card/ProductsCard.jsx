import addToCart from "../../assets/icon-add-to-cart.svg";
import mobileSample from "../../assets/image-waffle-mobile.jpg";
import desktopSample from "../../assets/image-waffle-desktop.jpg";
import tabletSample from "../../assets/image-waffle-tablet.jpg";
export const ProductsCard = () => {
  return (
    <div className="product-card">
      <section className="relative h-[14.6rem] lg:h-[16.375rem]  mb-6">
        <img src={mobileSample} alt="" className="product-img" />
        <button className="add-to-cart">
          {" "}
          <img src={addToCart} width={20} alt="" />
          Add to Cart
        </button>
      </section>
      <section className="h-[4.4rem]">
        <h1 className="text-sm text-[#87635A]">Waffle</h1>
        <h2 className="font-semibold">Waffle with Berries</h2>
        <p className="text-[#C73B0F] font-semibold">$6.50</p>
      </section>
    </div>
  );
};
