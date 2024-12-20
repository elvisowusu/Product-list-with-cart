import { useState } from "react"


export const useOrderProduct = () => {
  const options = [
    { id: 1, name: "Waffle", fullName: "Waffle with Berries", img: "", price: 6.50 },
    { id: 2, name: "Crème Brûlée", fullName: "Vanilla Bean Crème Brûlée", img: "", price: 7.00 },
    { id: 3, name: "Macron", fullName: "Macaron Mix of Five", img: "", price: 8.00},
    { id: 4, name: "Tiramisu", fullName: "Classic Tiramisu", img: "", price:5.50 },
    { id: 5, name: "Baklava", fullName: "Pistachio Baklava", img: "", price:4.00 },
    { id: 6, name: "Pie", fullName: "Lemon Meringue Pie", img: "", price:5.00 },
    { id: 7, name: "Cake", fullName: "Red Velvet Cake", img: "", price: 4.50 },
    { id: 8, name: "Brownie", fullName: "Salted Caramel Brownie", img: "", price: 5.50},
    { id: 9, name: "Panna Cotta", fullName: "Vanilla Panna Cotta", img: "", price: 6.50},
  ];

  return { options };
}
