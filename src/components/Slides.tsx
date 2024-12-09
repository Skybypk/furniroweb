import Image from "next/image";
import InnerPeace from "@/Pictures/inner.png";
import SideInner from "@/Pictures/Sideinner.png";

export default function SlideSection() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3]">
        <div className="slideText pt-9">
          <h4 className="font-extrabold text-[2rem]">
            50+ Beautiful rooms inspiration
          </h4>
          <p>
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#B88E2F] p-2">Explore More</button>
        </div>
        <div className="slideImages">
          <Image
            src={InnerPeace}
            width={250}
            height={250}
            alt="Inner Peace Room"
          />
        </div>
        <div className="slideImages">
          <Image
            src={SideInner}
            width={250}
            height={250}
            alt="Side Inner Room"
          />
        </div>
      </div>
    </>
  );
}
