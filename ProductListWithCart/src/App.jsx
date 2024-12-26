import { Cart } from "./components/cart/Cart";
import { OrderProvider } from "./hooks/useOrderProduct";

function App() {
  return (
    <OrderProvider>
      <Cart />
    </OrderProvider>
  );
}

export default App;
