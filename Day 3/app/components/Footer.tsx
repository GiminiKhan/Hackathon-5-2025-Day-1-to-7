import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center flex-col gap-8 w-full h-[555px] bg-white">
      <div className="grid grid-cols-4 gap-2 bg-white">
        <div className="flex justify-center items-center">
          <span className="px-18 text-[#9f9f9f]">
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-12 w-[352px] h-[312px]">
          <h1 className="pr-7 text-[#9f9f9f]">Links</h1>
          <ul className="text-black flex flex-col justify-center gap-12">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="shop">Shop</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              {" "}
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-12 w[140px] h-[242px]">
          <h1 className="pr-7 text-[#9f9f9f]">Help</h1>
          <ul className="text-black flex flex-col justify-center gap-12">
            <li>
              <Link href="payment options">Payment Options</Link>
            </li>
            <li>
              <Link href="returns">Returns</Link>
            </li>
            <li>
              <Link href="privacy policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-12 w-[286px] h-[101px]">
          <h1 className="text-[#9f9f9f]">News Letter</h1>
          <form>
            <input
              type="text"
              className="border-b-2 border-b-neutral-950 w-[173px] h-[21px] text-sm"
              placeholder="Enter Your Email Address"
            />{" "}
            <button
              type="submit"
              className="mx-4 text-black text-center border-b-2 border-black w-[70px] h-[20px] text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="border-t-2 p-8 text-black">
        <p>2022 Meubel House. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;