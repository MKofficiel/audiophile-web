import { Link } from "react-router";

const MenuItems = ({ label, path, image }) => {
  return (
    <div className="relative h-[165px] flex-1 rounded-sm bg-red-400 p-[24px] max-md:max-w-[327px] max-sm:w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <figure className="absolute -top-[35%] max-sm:-top-[40%]">
          <img src={image} alt={label} />
        </figure>

        <div className="flex w-full flex-1 flex-col items-center justify-end gap-[17px]">
          <h2 className="uppercase">{label}</h2>
          <Link to={path}>
            <div className="flex items-center gap-2">
              <span className="uppercase">shop</span>
              <div>
                <img src="/icons/Path.svg" alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
