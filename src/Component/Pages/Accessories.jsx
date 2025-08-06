// import React from 'react'
// import '../../General css/All-in-One.css'

// function Accessories() {
//   return (
//     <div className='pages_shower'>
//       it's Accessories Page
//     </div>
//   )
// }

// export default Accessories
import '../../General css/All-in-One.css'
import React from 'react';
// import './Accessories.css';

const accessories = [
  {
    id: 1,
    name: 'AirPods Pro',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1660803972364',
    price: '$249.00',
  },
  {
    id: 2,
    name: 'MagSafe Charger',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3_AV1?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1710888534690',
    price: '$39.00',
  },
  {
    id: 3,
    name: 'Apple Pencil (2nd gen)',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1556586391581',
    price: '$129.00',
  },
  {
    id: 4,
    name: 'Magic Keyboard',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1625691104000',
    price: '$99.00',
  },
  {
    id: 5,
    name: 'Smart Folio for iPad',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX4U2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1580322426576',
    price: '$79.00',
  },
  {
    id: 6,
    name: 'MagSafe Battery Pack',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MJWY3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1629920055000',
    price: '$99.00',
  },
  {
    id: 7,
    name: 'Apple 20W USB‑C Adapter',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHJA3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1599071991000',
    price: '$19.00',
  },
  {
    id: 8,
    name: 'USB-C to Lightning Cable (1m)',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX0K2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1595611854000',
    price: '$19.00',
  },
  {
    id: 9,
    name: 'Apple TV Remote',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM4T2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1494442281321',
    price: '$59.00',
  },
  {
    id: 10,
    name: 'HomePod mini',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-yellow-202110?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1632937048000',
    price: '$99.00',
  },
  {
    id: 11,
    name: 'Beats Studio Pro',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQLK3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1690311773266',
    price: '$349.00',
  },
  {
    id: 12,
    name: 'Magic Mouse',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1645138486313',
    price: '$79.00',
  },
];





function Accessories() {
  return (
    <div className="accessories-wrapper">
      <h1>Accessories</h1>
      <p className="subtitle">Essential Apple accessories, designed beautifully.</p>
      <div className="accessories-grid">
        {accessories.map((item) => (
          <div className="accessory-card" key={item.id}>
            <img src={`${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accessories;
