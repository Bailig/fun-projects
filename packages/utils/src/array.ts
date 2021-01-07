export const randomArray = (length: number, max: number) =>
  new Array(length)
    .fill(undefined)
    .map(() => Math.round(Math.random() * max + 1));
