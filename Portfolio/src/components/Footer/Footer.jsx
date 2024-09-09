import React from "react";
import logo from "../../LogoPic/logo.png";

import SocialLinks from "../SocialLinks/SociaLinks";
function Footer() {
  return (
    <footer className=" flex flex-col text-white mt-32 p-10 text-center ">
      <img className="h-16 w-64 items-start" src={logo} alt="logo" />
      <hr className="mt-10 border-black dark:border-lines" />
      <div className="flex">
        <p className="flex justify-center py-14 pr-32 w-1/2 text-center border-r border-black text-black dark:font-Montserrat dark:border-lines dark:text-white">
          © 2024 My Portfolio. All rights reserved.
        </p>
        <div className="flex items-center">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
