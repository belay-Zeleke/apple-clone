// import React from "react";

// const Tv = () => {
//   return <div>It`s App Tv Page</div>;
// };

// export default Tv;



import "../../General css/All-in-One.css";
import React from "react";


const tvProducts = [
  {
    id: 1,
    name: "Apple TV 4K",
    price: "From $129",
    image: "https://m.media-amazon.com/images/I/41vB9H4cv3L._AC_SL1000_.jpg",
  },
  {
    id: 2,
    name: "HomePod (2nd Gen)",
    price: "$299.00",
    image: "https://m.media-amazon.com/images/I/71MZ5F8iUvL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "HomePod Mini",
    price: "$99.00",
    image: "https://m.media-amazon.com/images/I/81jwctvLCdL._AC_SL1500_.jpg",
  },
  {
    id: 4,
    name: "Apple Siri Remote",
    price: "$59.00",
    image: "https://m.media-amazon.com/images/I/51DJhFKyJfL._AC_SL1500_.jpg",
  },
  {
    id: 5,
    name: "Beats Pill+ Speaker",
    price: "$179.95",
    image: "https://m.media-amazon.com/images/I/71tw2ZVHzYL._AC_SL1500_.jpg",
  },
  {
    id: 6,
    name: "Apple TV Mount",
    price: "$19.99",
    image: "https://m.media-amazon.com/images/I/51p+ybmciqL._AC_SL1200_.jpg",
  },
  {
    id: 7,
    name: "AirPlay 2 Speaker",
    price: "$149.00",
    image: "https://m.media-amazon.com/images/I/71ikj1W50+L._AC_SL1500_.jpg",
  },
  {
    id: 8,
    name: "Smart TV with Apple TV App",
    price: "From $399.00",
    image: "https://m.media-amazon.com/images/I/81cZud5qjuL._AC_SL1500_.jpg",
  },
  {
    id: 9,
    name: "HomeKit Smart Plug",
    price: "$24.99",
    image: "https://m.media-amazon.com/images/I/61t+fZozYWL._AC_SL1500_.jpg",
  },
  {
    id: 10,
    name: "Nanoleaf Light Panels",
    price: "From $199.00",
    image: "https://m.media-amazon.com/images/I/61dtA12OfML._AC_SL1200_.jpg",
  },
  {
    id: 11,
    name: "Home Security Cam",
    price: "From $99.00",
    image: "https://m.media-amazon.com/images/I/61Yae3RzGoL._AC_SL1500_.jpg",
  },
  {
    id: 12,
    name: "Apple TV Game Controller",
    price: "$59.00",
    image: "https://m.media-amazon.com/images/I/61dKMQfT8tL._AC_SL1500_.jpg",
  },
];

const Tv = () => {
  return (
    <div className="tv-page">
      <h2 className="tv-title">TV & Home</h2>
      <div className="tv-grid">
        {tvProducts.map((item) => (
          <div className="tv-product" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tv;
