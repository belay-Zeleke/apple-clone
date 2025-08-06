import "../../General css/All-in-One.css";


import React from "react";



const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    description: "Coming Soon – The future of iPhone.",
    image:
      "https://th.bing.com/th/id/OIP.32Q9UDoeuBYUSy5ozoJsbwHaJC?w=149&h=182&c=7&r=0&o=7&pid=1.7&rm=3", 
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "Titanium. Beyond Strength.",
    image:
      "https://th.bing.com/th/id/OIP.geNBYR_gymfpIDp5qL3CFgHaJM?w=140&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "iPhone 15",
    description: "New colors. Powerful performance.",
    image:
      "https://i5.walmartimages.com/seo/Restored-Apple-iPhone-15-128GB-Blue-Refurbished_ddaf01a4-d6f6-4f94-8fba-d630be4c1864.d418acbe6c2e875e4640b63789c187ed.jpeg",
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    description: "Pro camera. Pro display.",
    image:
      "https://th.bing.com/th/id/OIP.zYpRLiyjqCSJRko8d6eNjAHaJF?w=145&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 5,
    name: "iPhone 14",
    description: "Full of fantastic features.",
    image:
      "data:image/webp;base64,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",
  },
  {
    id: 6,
    name: "iPhone SE",
    description: "Powerful and compact.",
    image:
      "data:image/webp;base64,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",
  },
  {
    id: 7,
    name: "iPhone 13",
    description: "Bright colors, powerful chip.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842708000",
  },
  {
    id: 8,
    name: "iPhone 13 mini",
    description: "Compact yet powerful.",
    image:
      "data:image/webp;base64,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",
  },
  {
    id: 9,
    name: "iPhone 12",
    description: "Advanced dual-camera system.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343707000",
  },
  {
    id: 10,
    name: "iPhone 12 mini",
    description: "Small size, big performance.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-black-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343707000",
  },
  {
    id: 11,
    name: "iPhone 11",
    description: "Dual‑camera system and long battery.",
    image:
      "https://th.bing.com/th/id/OIP.RVWEeEbus48QaRwNArTIggHaKm?w=140&h=200&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 12,
    name: "iPhone XR",
    description: "Colorful. Powerful. Affordable.",
    image:
      "data:image/webp;base64,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",
  },
];

const Iphone = () => {
  return (
    <div className="iphone-container">
      <h1 className="iphone-title">Explore iPhone</h1>
      <div className="iphone-grid">
        {products.map((product) => (
          <div key={product.id} className="iphone-card">
            <img src={product.image} alt={product.name} className="iphone-img" />
            <h2 className="iphone-name">{product.name}</h2>
            <p className="iphone-desc">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Iphone;
