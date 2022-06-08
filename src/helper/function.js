const shorten = (title) => {
  const spilteTitle = title.split(" ");
  const newTitle = `${spilteTitle[0]} ${spilteTitle[1]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const result = state.selectItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectItems[index].quantity;
  }
};

export { shorten, isInCart , quantityCount };
