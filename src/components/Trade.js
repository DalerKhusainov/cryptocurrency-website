// REACT HOOKS
import { useState } from "react";

// DATA
import { currency } from "../data";

// ICONS
import { IoIosArrowForward } from "react-icons/io";

const Trade = () => {
  // ITEM NAME STATE
  const [itemName, setItemName] = useState("Bitcoin");

  return (
    <section
      className="section lg:pt-[320px] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px]"
      id="products"
    >
      <div className="container mx-auto">
        <h2
          className="mb-16 text-center section-title"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          Trade securely and market the high growth cryptocurrencies.
        </h2>
        {/* ITEMS */}
        <div
          className="flex flex-col gap-[45px] lg:flex-row"
          data-aos="fade-up"
          data-aos-offset="450"
        >
          {currency.map((item, index) => {
            const { image, name, abbr, description } = item;
            return (
              <div
                onClick={() => setItemName(name)}
                className={`${
                  name === itemName ? "bg-violet text-white" : "bg-white"
                } w-full px-6 py-12 transition duration-300 cursor-pointer rounded-2xl shadow-primary`}
                key={index}
              >
                <div className="flex flex-col items-center justify-center">
                  {/* ITEM IMAGE */}
                  <img className="mb-12" src={image} alt="" />
                  {/* ITEM NAME */}
                  <div className="flex items-center mb-4 gap-x-2">
                    <div className="text-[32px] font-bold">{name}</div>
                    <div className="text-lg font-medium text-gray-400">
                      {abbr}
                    </div>
                  </div>
                  {/* ITEM DESCRIPTON */}
                  <p className="mb-6 text-center">{description}</p>
                  {/* BTN */}
                  <button
                    className={`${
                      name === itemName
                        ? "text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3"
                        : "text-blue w-16"
                    } flex items-center justify-center h-16 border-2 border-gray-300 rounded-full`}
                  >
                    {name === itemName && (
                      <div className="text-lg font-medium">Start Mining</div>
                    )}
                    <IoIosArrowForward
                      className={`${
                        name === itemName ? "text-2xl" : "text-3xl"
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
