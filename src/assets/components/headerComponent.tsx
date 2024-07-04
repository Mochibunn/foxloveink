let Header = () => {
  return (
    <>
      <div className="flex pt-0 justify-evenly">
        <>
          <img
            src="/src/assets/images/logo.png"
            alt="FoxLoveInk Logo"
            width="456px"
            height="207px"
            className="max-h-[80px] pointer-events-none select-none"
          />
        </>
        <div className="flex items-center my-0 gap-x-6">
          <p className="text-4xl">Portfolio</p>
          <p className="text-4xl">Beans</p>
          <p className="text-4xl">Contact</p>
          <p className="text-4xl">About</p>
        </div>
      </div>
    </>
  );
};

export default Header;
