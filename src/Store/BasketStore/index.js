export const BasketStore = {
  add: (el) => {
    const basket = JSON.parse(localStorage.getItem("BASKET"));

    localStorage.setItem("BASKET", JSON.stringify([...(basket ?? []), el]));
  },
  remove: (el) => {
    const basket = JSON.parse(localStorage.getItem("BASKET"));
    const index = basket.findIndex((item) => item.id === el.id);
    basket.splice(index, 1);
    localStorage.setItem("BASKET", JSON.stringify(basket));
  },
  getAll: () => {
    return JSON.parse(localStorage.getItem("BASKET"));
  },
  deleteAll: () => {
    localStorage.removeItem("BASKET");
  },
};
