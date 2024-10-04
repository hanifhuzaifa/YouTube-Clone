export const API_KEY = "AIzaSyA10dOIfa7K7-6CtdBysLTk4iLq8EX4xaE";

export const value_convarter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
