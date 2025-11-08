import React from "react";
import Title from "./Title";
import { RiExchangeFundsLine } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

function OurPolicy() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-l from-[#141414] to-[#0c2025] py-16 px-4 text-center">
      <Title text1={"OUR"} text2={" POLICY"} />
      <p className="text-blue-100 text-sm md:text-lg mt-2">
        Customer-Friendly Policies committed to your satisfaction and safety.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {[
          {
            icon: (
              <RiExchangeFundsLine className="w-10 h-10 md:w-14 md:h-14 text-[#90b9ff]" />
            ),
            title: "Easy Exchange Policy",
            desc: "Quick, simple, and customer-friendly exchange process.",
          },
          {
            icon: (
              <BsPatchCheckFill className="w-10 h-10 md:w-14 md:h-14 text-[#90b9ff]" />
            ),
            title: "7 Days Return Policy",
            desc: "Exchange or return within 7 days — no hassle.",
          },
          {
            icon: (
              <MdSupportAgent className="w-10 h-10 md:w-14 md:h-14 text-[#90b9ff]" />
            ),
            title: "Best Customer Support",
            desc: "Trusted support — loved by our customers.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="w-[280px] md:w-[350px] flex flex-col items-center gap-3 text-center"
          >
            {item.icon}
            <p className="font-semibold text-lg md:text-2xl text-[#a5e8f7]">
              {item.title}
            </p>
            <p className="text-sm md:text-base text-[aliceblue]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPolicy;
