import React from "react";
import logo from "/NexBuy.png";

function Footer() {
  return (
    <footer className="w-full bg-[#dbfcfcec] flex flex-col items-center text-center md:text-left">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-16 py-10 gap-8">
        {/* Logo + About */}
        <div className="flex flex-col md:w-1/3 gap-3 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <img src={logo} alt="NexBuy" className="w-8 h-8 md:w-10 md:h-10" />
            <p className="text-xl font-semibold text-black">NexBuy</p>
          </div>
          <p className="text-sm md:text-base text-[#1e2233] leading-relaxed">
            NexBuy — your trusted online store for quality, style, and
            unbeatable prices. Shop smart, shop NexBuy.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col md:w-1/4 gap-2 items-center md:items-start text-center md:text-left">
          <p className="text-lg font-semibold text-[#1e2233] mb-2">Company</p>
          {["Home", "About Us", "Delivery", "Privacy Policy"].map((link) => (
            <p
              key={link}
              className="text-sm text-[#1e2233] hover:text-black cursor-pointer"
            >
              {link}
            </p>
          ))}
        </div>

        {/* Get in Touch */}
        <div className="flex flex-col md:w-1/4 gap-2 items-center md:items-start text-center md:text-left">
          <p className="text-lg font-semibold text-[#1e2233] mb-2">
            Get in Touch
          </p>
          <p className="text-sm text-[#1e2233]">+91-6548315425</p>
          <p className="text-sm text-[#1e2233]">contact@nexbuy.com</p>
          <p className="text-sm text-[#1e2233]">+91-4526256242</p>
          <p className="text-sm text-[#1e2233]">admin123@nexbuy.com</p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-slate-400" />
      <div className="w-full py-3 text-sm text-black bg-[#dbfcfcec]">
        © 2025 NexBuy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
