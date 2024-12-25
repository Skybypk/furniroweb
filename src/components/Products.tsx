import Image from "next/image";
import image1 from "../../public/image-1.png"; // Import each static image with a unique name
import image2 from "../../public/image-2.png";
import image3 from "../../public/image-3.png";
import image4 from "../../public/image-4.png";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: any; // Use `any` for images as they're imported objects in Next.js
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: image1, // Reference imported image
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: image2, // Reference imported image
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson 1",
      price: "Rp 2.500.000",
      age: 28,
      image: image3, // Reference imported image
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson 2",
      price: "Rp 2.500.000",
      age: 28,
      image: image4, // Reference imported image
      description: "A software engineer specializing in backend systems.",
    },
  ];

  return (
    <>
      <div className="product">
        <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
      </div>
      <div className="cardsContainer">
        {data.map((card) => (
          <div className="card" key={card.name} style={{ width: "15rem" }}>
            <Image
              src={card.image} // Directly use the imported image
              width={288}
              height={288}
              alt={card.name}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title font-bold">{card.name}</h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title font-bold">{card.price}</h5>
            </div>
          </div>
        ))}
        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">
          Show More
        </button>
      </div>
    </>
  );
}
