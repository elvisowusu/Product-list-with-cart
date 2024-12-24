

export const useOrderProduct = () => {
  const options = [
    { id: 1, name: "Waffle", description: "Waffle with Berries", key: "waffle", price: "6.50" },
    { id: 2, name: "Crème Brûlée", description: "Vanilla Bean Crème Brûlée", key: "cremeBrulee", price: "7.00" },
    { id: 3, name: "Macron", description: "Macaron Mix of Five", key: "macaron", price: "8.00"},
    { id: 4, name: "Tiramisu", description: "Classic Tiramisu", key: "tiramisu", price:"5.50" },
    { id: 5, name: "Baklava", description: "Pistachio Baklava", key: "baklava", price:"4.00" },
    { id: 6, name: "Pie", description: "Lemon Meringue Pie", key: "pie", price:"5.00" },
    { id: 7, name: "Cake", description: "Red Velvet Cake", key: "cake", price: "4.50" },
    { id: 8, name: "Brownie", description: "Salted Caramel Brownie", key: "brownie", price: "5.50"},
    { id: 9, name: "Panna Cotta", description: "Vanilla Panna Cotta", key: "pannaCotta", price: "6.50"},
  ];

  return { options };
}
