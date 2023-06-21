import { useContext, useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { HeaderContext } from "../../context/HeaderContext";
export const Sidebar = () => {
  const { expanded } = useContext(HeaderContext);
  return (
    <section
      className={`bg-main-black h-screen ${
        expanded ? "w-[300px]" : "w-[80px]"
      } flex text-white relative`}
    >
      <button className="absolute bg-orange-400 left-[100%] translate-x-[-50%] top-[16px] text-2xl rounded-full">
        {expanded ? <MdChevronLeft /> : <MdChevronRight />}
      </button>
    </section>
  );
};
