/* eslint-disable jsx-a11y/anchor-is-valid */
//

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* LINK BTNS */}
      <a className="transition hover:text-blue" href="#">
        Login
      </a>
      {/* SEPARATOR */}
      <span className="mx-6 font-thin text-white/20">|</span>
      {/* REGISTER BTN */}
      <button className="btn h-[52px] text-base px-8">Register</button>
    </div>
  );
};

export default AccountBtns;
