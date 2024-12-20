import { useOrderProduct } from "../../hooks/useOrderProduct";
import { ProductsCard } from "../Products card/ProductsCard";

export const ProductList = () => {
  const { options } = useOrderProduct();
  return (
    <div>
      <h1 className="text-[2.5rem] font-bold">Desserts</h1>
      <div className="grid grid-flow-row grid-cols-1 items-center md:grid-cols-3 gap-y-[1rem] lg:gap-y-[1.7rem] gap-x-[1rem] lg:gap-x-8">
        {options.map((item, index) => (
          <ProductsCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
