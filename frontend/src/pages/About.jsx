import React from "react";
import Title from "../components/Title";
import about from "../assets/about.jpg";
import NewsLetterBox from "../components/NewsLetterBox";

function About() {
  return (
    <div className="w-[99vw] md:w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]">
      <Title text1={"ABOUT"} text2={" US"} />
      <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row">
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
          <img
            src={about}
            alt=""
            className="lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]">
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]">
            At NexBuy, we believe shopping should be effortless, enjoyable, and
            affordable. Our mission is to bring the latest fashion trends and
            high-quality products right to your fingertips, ensuring a smooth
            and satisfying shopping experience from start to finish.
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]">
            We work closely with trusted suppliers and brands to offer
            hand-picked collections across categories such as men’s wear,
            women’s wear, and kids’ fashion. Every product goes through a
            quality check to ensure value, comfort, and style that lasts.
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px] font-bold">
            Customer happiness is our top priority. We provide secure payment
            options, easy returns, fast delivery, and responsive support so you
            can shop with confidence. Your trust drives us to keep improving
            every step of the way.
          </p>
          <p className="lg:w-[80%] w-[100%] text-white lg:text-[18px] text-[15px] mt-[10px] font-bold">
            Our Mission
          </p>
          <p className="lg:w-[80%] w-[100%] text-white md:text-[16px] text-[13px]">
            Our mission at NexBuy is to revolutionize online shopping by
            offering high-quality products at honest prices while delivering a
            seamless, fast, and reliable customer experience. We aim to make
            everyday shopping convenient and enjoyable for everyone, everywhere.
          </p>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center flex-col gap-[10px]">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]">
          <div
            className="lg-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col
          px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]"
          >
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Quality Assurance
            </b>
            <p>
              At NexBuy, we believe that quality is the foundation of trust.
              Every product listed on our platform goes through a strict
              selection and verification process to ensure it meets our high
              standards. From materials and craftsmanship to packaging and
              delivery, we check every detail so our customers receive only the
              best.
            </p>
          </div>
          <div
            className="lg-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col
          px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]"
          >
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Convenience
            </b>
            <p>
              At NexBuy, we aim to make your shopping experience as smooth and
              effortless as possible. From easy navigation and smart search
              features to fast checkout and secure payment options, every part
              of our platform is designed for convenience. Shop anytime,
              anywhere, and enjoy seamless access to thousands of products right
              at your fingertips.
            </p>
          </div>
          <div
            className="lg-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col
          px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]"
          >
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Exceptional Customer Service
            </b>
            <p>
              We believe great products deserve great support. Our dedicated
              customer care team is always ready to help with quick responses,
              transparent communication, and real solutions. Whether you need
              order assistance, product guidance, or after-sales support, we are
              just a message away.
            </p>
          </div>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About;
