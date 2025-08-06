// import React from 'react'

// function Store() {
//   return (
//     <div>
//       It's Store page
//     </div>
//   )
// }

// export default Store

import "../../General css/All-in-One.css";

import React from "react";

const storeProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692844764700",
    price: "From $999",
  },
  {
    id: 2,
    name: "iPhone 15",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-model-unselect-gallery-2-202309_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1692912627399",
    price: "From $799",
  },
  {
    id: 3,
    name: "MacBook Pro 14”",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202301?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1670627410952",
    price: "From $1999",
  },
  {
    id: 4,
    name: "AirPods Max",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011_FMT_WHH?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1604022365000",
    price: "$549.00",
  },
  {
    id: 5,
    name: "AirPods Pro (2nd Gen)",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803972361",
    price: "$249.00",
  },
  {
    id: 6,
    name: "Apple Pencil Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUWA3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1713280979582",
    price: "$129.00",
  },
  {
    id: 7,
    name: "MagSafe Charger",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1701460649945",
    price: "$39.00",
  },
  {
    id: 8,
    name: "Beats Studio Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTP3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1691510916222",
    price: "$349.99",
  },
  {
    id: 9,
    name: "Magic Keyboard for iPad Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDP3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1681296117241",
    price: "$349.00",
  },
  {
    id: 10,
    name: "HomePod mini",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632938810000",
    price: "$99.00",
  },
 {
  id: 11,
  name: 'AirPods Max',
  image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1604022365000',
  price: '$549.00',
} ,
  {
    id: 12,
    name: "MagSafe Battery Pack",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MJWY3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1657827761641",
    price: "$99.00",
  },
];

function Store() {
  return (
    <div className="store-container">
      <h2 className="store-title">Explore Apple Products</h2>
      <div className="products-grid">
        {storeProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
