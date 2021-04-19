export const selectProduct = (products, productId) => {
  // debugger;
  return products[productId] || { reviewIds: [] };
};

export const selectReviewsForProduct = ({ reviews }, product) => {
  return product.reviewIds.map((reviewId) => reviews[reviewId]);
};
export const asArray = ({ products }) =>
  Object.keys(products).map((key) => products[key]);
/*
Create a function:

const filterObject = (obj, filter, filterValue) =>
   Object.keys(obj).reduce((acc, val) =>
   (obj[val][filter] === filterValue ? acc : {
       ...acc,
       [val]: obj[val]
   }
), {});
And call it:

filterObject(developers, "name", "Alireza");
and will return:

{
  1: {
  id: 1,
  name: "Brendan",
  family: "Eich"
  },
  2: {
   id: 2,
   name: "John",
   family: "Resig"
  }
}
*/
