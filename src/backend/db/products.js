import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Naruto Action figure",
    companyName: "companyXyz",
    price: "2000",
    categoryName: "Action-figures",
    isBestSeller:true,
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647807195/Naruto_lgd2bl.jpg",
    rating:'5'
  },
  {
    _id: uuid(),
    productName: "Goku Action figure",
    companyName: "companyXyz2",
    price: "2500",
    categoryName: "Action-figures",
    isBestSeller:true,
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647807261/goku_gwqn8j.jpg",
    rating:'4'
  },
  {
    _id: uuid(),
    productName: "Kaneki Action figure",
    companyName: "companyXyz3",
    price: "2200",
    categoryName: "Action-figures",
    isBestSeller:true,
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647807356/kaneki_c5gjvf.jpg",
    rating:'3'
  },
  {
    _id: uuid(),
    productName: "Kaneki Mask",
    companyName: "companyXyz4",
    price: "1000",
    categoryName: "Masks",
    isBestSeller:true,
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1649246784/kaneki_mask_cxvsrt.jpg",
    rating:'3'
  },
  {
    _id: uuid(),
    productName: "Naruto tshirt",
    companyName: "companyXyz5",
    price: "1200",
    categoryName: "T-shirts",
    isBestSeller:true,
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647794734/tshirt_ieikhp.jpg",
    rating:'3'
  },
];
