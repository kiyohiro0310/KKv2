import ThemeSwitch from "@/app/Themes/ThemeSwitcher";

const Hamburger = ({
  isOpen,
  clickHandler,
  openStatus,
}: {
  isOpen: boolean;
  clickHandler(): void;
  openStatus: string;
}) => {
  return (
    <div className="flex md:hidden items-center justify-center space-x-4">
      <ThemeSwitch />
      <div
        className={`hamburger ${openStatus} cursor-pointer md:hidden focus:outline-none`}
        onClick={clickHandler}
      >
        <span className="hamburger-top bg-dark dark:bg-light"></span>
        <span className="hamburger-middle bg-dark dark:bg-light"></span>
        <span className="hamburger-bottom bg-dark dark:bg-light"></span>
      </div>
    </div>
  );
};

export default Hamburger;
