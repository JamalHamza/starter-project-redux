import { CLEAR_CART, GET_TOTALS, REMOVE, TOGGLE_AMOUNT } from "./Actions";
// items
import cartItems from "./cart-items";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialState, action) {
  // ! -----------------------------------
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  // ! I use toggle instead (INCREASE & DECREASE)
  // // ! -----------------------------------
  // if (action.type === INCREASE) {
  //   const cartTemp = state.cart.map((item) => {
  //     if (item.id === action.payload.id) {
  //       return { ...item, amount: item.amount + 1 };
  //     }
  //     return item;
  //   });
  //   return { ...state, cart: cartTemp };
  // }
  // // ! -----------------------------------
  // if (action.type === DECREASE) {
  //   let cartTemp = state.cart.map((item) => {
  //     if (item.id === action.payload.id) {
  //       item = { ...item, amount: item.amount - 1 };
  //     }
  //     return item;
  //   });

  //   return { ...state, cart: cartTemp };
  // }
  // ! -----------------------------------
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  // ! -----------------------------------
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = amount * price;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  // ! -----------------------------------
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return (item = { ...item, amount: item.amount + 1 });
          } else {
            return (item = { ...item, amount: item.amount - 1 });
          }
        }
        return item;
      }),
    };
  }
  return state;
}

export default reducer;
