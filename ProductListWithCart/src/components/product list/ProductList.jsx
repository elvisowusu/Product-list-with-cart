import { ProductsCard } from "../Products card/ProductsCard"

export const ProductList = () => {
  return (
    <div>
      <h1 className="text-[2.5rem] font-bold grid grid-flow-row grid-cols-1 items-center md:grid-cols-3 ">Desserts</h1>
      <ProductsCard/>
    </div>
  )
}