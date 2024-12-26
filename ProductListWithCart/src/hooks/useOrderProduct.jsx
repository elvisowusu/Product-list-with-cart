import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const availableProducts = [
    {
      id: 1,
      name: "Waffle",
      description: "Waffle with Berries",
      key: "waffle",
      price: "6.50",
    },
    {
      id: 2,
      name: "Crème Brûlée",
      description: "Vanilla Bean Crème Brûlée",
      key: "cremeBrulee",
      price: "7.00",
    },
    {
      id: 3,
      name: "Macron",
      description: "Macaron Mix of Five",
      key: "macaron",
      price: "8.00",
    },
    {
      id: 4,
      name: "Tiramisu",
      description: "Classic Tiramisu",
      key: "tiramisu",
      price: "5.50",
    },
    {
      id: 5,
      name: "Baklava",
      description: "Pistachio Baklava",
      key: "baklava",
      price: "4.00",
    },
    {
      id: 6,
      name: "Pie",
      description: "Lemon Meringue Pie",
      key: "pie",
      price: "5.00",
    },
    {
      id: 7,
      name: "Cake",
      description: "Red Velvet Cake",
      key: "cake",
      price: "4.50",
    },
    {
      id: 8,
      name: "Brownie",
      description: "Salted Caramel Brownie",
      key: "brownie",
      price: "5.50",
    },
    {
      id: 9,
      name: "Panna Cotta",
      description: "Vanilla Panna Cotta",
      key: "pannaCotta",
      price: "6.50",
    },
  ];
  const addToCart = (selectedProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === selectedProduct.id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === selectedProduct.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                accumulatedPrice: (item.quantity + 1) * parseFloat(item.price),
              }
            : item
        );
      }
      return [
        ...prevCart,
        {
          ...selectedProduct,
          quantity: 1,
          accumulatedPrice: parseFloat(selectedProduct.price),
        },
      ];
    });
  };

  const reduceQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
                accumulatedPrice: (item.quantity - 1) * parseFloat(item.price),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.accumulatedPrice, 0)
      .toFixed(2);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <OrderContext.Provider
      value={{
        availableProducts,
        cart,
        cartFunctions: {
          addToCart,
          reduceQuantity,
          removeFromCart,
          calculateTotal,
        },
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderProduct = () => useContext(OrderContext);
