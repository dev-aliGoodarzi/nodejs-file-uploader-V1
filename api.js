const products = [
  {
    id: "product 1",
    price: 100,
  },
  {
    id: "product 2",
    price: 200,
  },
  {
    id: "product 3",
    price: 300,
  },
  {
    id: "product 4",
    price: 400,
  },
  {
    id: "product 5",
    price: 500,
  },
  {
    id: "product 6",
    price: 600,
  },
];
const cart = [
  {
    productId: "product 4",
    quantity: 6,
    price: null,
  },
  {
    productId: "product 5",
    quantity: 1,
    price: null,
  },
  {
    productId: "product 2",
    quantity: 5,
    price: null,
  },
];
const profile = {
  userName: "ali",
  userFamily: "goudarzi",
  userId: "3217",
};
const comments = [
  {
    id: "cm-1",
    comment: "test1 is test ",
  },
  {
    id: "cm-2",
    comment: "test2 is test ",
  },
  {
    id: "cm-3",
    comment: "test3 is test ",
  },
  {
    id: "cm-4",
    comment: "test4 is test ",
  },
];
module.exports = {
  products,
  cart,
  profile,
  comments,
};
