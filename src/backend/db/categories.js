import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action-figures",
    description:
      "Get the best action figures collection here from: Naruto,DBZ, one piece and many more",
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647794650/ac_fig_u5n5wb.jpg"
  },
  {
    _id: uuid(),
    categoryName: "T-shirts",
    description:
      "Get the best T-shirts collection here from: Naruto,DBZ, one piece and many more",
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647794734/tshirt_ieikhp.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Masks",
    description:
      "Get the best masks collection here from: Naruto,DBZ, one piece and many more",
    imageUrl:"https://res.cloudinary.com/dqqehaaqo/image/upload/v1647794815/masks_l8xf1r.jpg"
  },
];
