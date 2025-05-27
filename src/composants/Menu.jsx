import { Link } from "react-router";

const MenuItems = ({ label, path, image }) => {
  return (
    <div className="relative h-[165px] max-w-[327px] flex-1 bg-red-400 p-[24px]">
      <div className="flex w-full flex-col items-center justify-center">
        <figure className="absolute -top-[35%]">
          <img src={image} alt={label} />
        </figure>
        <h2>{label}</h2>
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
  );
};

export default MenuItems;
