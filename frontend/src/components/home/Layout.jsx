import React from "react";
import BackButton from "../BackButton.jsx";
const Layout = ({ children }) => {
  return (
    <div className="mx-32">
      <h1
        className="text-white text-3xl py-2.5 text-[38px] font-semibold font-['Work
Sans'] capitalize leading-[45.60px]"
      >
        Discover More NFTs
      </h1>
      <div className="flex justify-between py-2.5">
        <h4 className="text-white capitalize leading-[9px]">
          Explore New Trending NFTs
        </h4>
        <BackButton />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
