export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const CLEAR_CART = "CLEAR_CART";

// ! Action Creators:
export const remove = (id) => {
  return { type: REMOVE, payload: { id } };
};
