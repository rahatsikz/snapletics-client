import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assests/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gray-800 text-primary-content">
        <div>
          <img src={logo} alt="" className="w-2/3" />
          <p className="font-bold">
            Snapletics <br />
            Providing reliable service since 2010
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
