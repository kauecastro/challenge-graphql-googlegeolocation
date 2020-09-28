const formatPrice = (price: Number): any => {
  let formated = price.toFixed(2);
  formated = formated.replace(".", ",");
  return "R$ " + formated;
};

export { formatPrice }