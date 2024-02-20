export const capitalizeFirstLetter = (str) => {
  return str
    .split(" ")
    .map((word) => {
      const wordAsSmall = word.toLowerCase();
      return wordAsSmall
        ? `${wordAsSmall[0].toUpperCase()}${wordAsSmall.slice(1)}`
        : "";
    })
    .join(" ");
};
