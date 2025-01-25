import React from "react";

const PageNumber = () => {
  return (
    <div className="flex gap-8 justify-center items-center py-32">
      <button className="w-[60px] h-[60px] bg-[#FBEBB5] text-xl flex justify-center items-center rounded-[10px]">
        1
      </button>
      <button className="w-[60px] h-[60px] bg-[#FFF9E5] text-xl flex justify-center items-center rounded-[10px]">
        2
      </button>
      <button className="w-[60px] h-[60px] bg-[#FFF9E5] text-xl flex  justify-center items-center rounded-[10px]">
        3
      </button>
      <button className="lg:w-24 w-20 h-[60px] bg-[#FFF9E5] text-xl flex justify-center items-center rounded-[10px]">
        Next
      </button>
    </div>
  );
};

export default PageNumber;
