import { Link } from "react-router";

const MenuCard = ({ label, path, image }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-[8px] bg-[#f1f1f1] py-2 shadow-sm">
      <figure className="flex h-full items-end">
        <div className="absolute -top-13 left-1/2 -translate-x-1/2">
          <img src={image} alt={label} />
        </div>
        <div className="flex flex-1 flex-col gap-[10px]">
          <h2 className="text-[15px] font-bold tracking-[1.07px] uppercase">
            {label}
          </h2>
          <Link
            to={path}
            className="flex items-center justify-center gap-[13px] uppercase"
          >
            <span className="font-bold text-[#979797]">Shop</span>
            <span>
              <img src="/icons/Path.svg" alt="" />
            </span>
          </Link>
        </div>
      </figure>
    </div>
  );
};

export default MenuCard;
