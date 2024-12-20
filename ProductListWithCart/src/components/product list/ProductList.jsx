import { useOrderProduct } from "../../hooks/useOrderProduct";
import { ProductsCard } from "../Products card/ProductsCard";

export const ProductList = () => {
  const { options } = useOrderProduct();
  return (
    <div>
      <h1 className="text-[2.5rem] font-bold">Desserts</h1>
      <div className="product-list">
        {options.map((item, index) => (
          <ProductsCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
