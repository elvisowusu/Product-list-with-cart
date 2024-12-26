import { useOrderProduct } from "../../hooks/useOrderProduct";
import { ProductsCard } from "../Products card/ProductsCard";

export const ProductList = () => {
  const { availableProducts } = useOrderProduct();
  return (
    <div>
      <h1 className="text-[2.5rem] font-bold">Desserts</h1>
      <div className="product-list">
        {availableProducts.map((product, index) => (
          <ProductsCard key={index} product={product}/>
        ))}
      </div>
    </div>
  );
};
