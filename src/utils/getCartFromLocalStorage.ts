export const getCartFromLocalStorage = (name: "data" | "cards" | "cardsInCart") => {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : [];
};
