const CalcForm = () => {
  return (
    <div
      className="w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <form className="flex flex-col space-y-12 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
        <input
          className="placeholder:text-darkblue input"
          type="text"
          placeholder="Enter your hash rate"
        />
        <select className="select">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>
        {/* BTN */}
        <button className="flex self-start px-8 text-white btn">
          Calculate
        </button>
      </form>
      {/* TEXT */}
      <div className="mt-24">
        <div className="mb-4 font-medium text-blue">
          ESTIMATED 24 HOUR REVENUE:
        </div>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <div className="text-gray-500 tracking-[1%]">
          Revenue will change based on mining difficulty and Ethereum price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
