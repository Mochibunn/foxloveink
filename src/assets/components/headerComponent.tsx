let Header = () => {
  return (
    <>
    <div className="flex pt-0 justify-evenly">
      <img
        src="/src/assets/images/logo.png"
        alt="FoxLoveInk Logo"
        className="h-[80px]"
      />
      <div className="flex gap-x-6">
        <p className="text-4xl">Portfolio</p>
        <p className="text-4xl">Beans</p>
        <p className="text-4xl">Contact</p>
        <p className="text-4xl">About</p>
      </div>
    </div>
    <div className="divider" />
    </>
  );
};

export default Header;