import Image, { StaticImageData } from "next/image";
import React from "react";
interface props {
  item: {
    id: number;
    image: StaticImageData;
    title: string;
    desc: string;
  };
}
export default function StatsCard({ item }: props) {
  return (
    <div
      style={{ marginTop: `${item.id * 30}px` }}
      className={`block m-5 relative !mt-0 md:min-h-[280px] md:max-h-[290px] pt-12 lg:max-h-auto lg:min-h-auto lg:m-0 font-poppins z-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm lg:mt-[${
        item.id * 30
      }px]`}
    >
      <Image
        src={item.image.src}
        alt={item.title}
        width={60}
        height={60}
        className="absolute -top-8 left-7 p-1 bg-gray-700 rounded-full"
      />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
        {item.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.desc}
      </p>
    </div>
  );
}
