import { useContext, useState } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section
      className={`bg-main-black min-h-screen h-full ${
        expanded ? "w-[300px]" : "w-[80px]"
      } flex text-white relative`}
    >
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="absolute bg-orange-400 left-[100%] translate-x-[-50%] top-[16px] text-2xl rounded-full"
      >
        {expanded ? <MdChevronLeft /> : <MdChevronRight />}
      </button>
    </section>
  );
};
