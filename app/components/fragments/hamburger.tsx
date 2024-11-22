
const Hamburger = ({ isOpen, clickHandler, openStatus }: {isOpen: boolean, clickHandler(): void, openStatus: string}) => {



  return (
    <div
      className={`hamburger ${openStatus} cursor-pointer md:hidden focus:outline-none`}
      onClick={clickHandler}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </div>
  );
};

export default Hamburger;
