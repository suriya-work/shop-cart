import React, { useReducer, createContext } from "react";

const initialState = {
  selectItems: [],
  itemCunter: 0,
  total: 0,
  checkOut: false,
};

const sumItems = items => {
  const itemCunter = items.reduce(
    (total, product) => total + product.quantity, 0);
  const total = items
    .reduce((total, product) => total + product.price * product.quantity , 0)
    .toFixed(2);
  return { itemCunter, total };
};

const cartReduser = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectItems.find((item) => item.id === action.payload.id)) {
        state.selectItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectItems: [...state.selectItems],
        ...sumItems(state.selectItems),
        checkOut: false,

      };

    case "REMOVE_ITEM":
      const newSelecdItem = state.selectItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectItems: [...newSelecdItem],
        ...sumItems(newSelecdItem),

      };
    case "INCREASE":
      const indexI = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectItems),

      };
    case "DECREASE":
      const indexD = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectItems),

      };
    case "CHECKOUT":
      return {
        selectItems: [],
        itemCunter: 0,
        total: 0,
        checkOut: true,
      };
    case "CLEAR":
      return {
        selectItems: [],
        itemCunter: 0,
        total: 0,
        checkOut: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReduser, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
