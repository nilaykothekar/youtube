import { Fragment } from "react";
import { HAMBURGER, USER, YOUTUBE_ICON } from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../slices/toggleMenuSlice";

const Navbar = () => {
    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    };

  return (
    <Fragment>
      <nav className="flex justify-between items-center w-full px-4 py-4 shadow-lg">
        <div className="w-[10%] flex items-center">
          <img
            src={HAMBURGER}
            alt="hamburger"
            width={40}
            className="mr-4 cursor-pointer"
            onClick={handleToggleMenu}
          />
          <img
            src={YOUTUBE_ICON}
            alt="youtube-logo"
            width={50}
            className="cursor-pointer"
          />
        </div>
        <div className="w-[75%] mx-auto">
          <input
            type="text"
            className="w-[95%] py-2 px-4 rounded-l-full border border-black text-sm"
            placeholder="Please search your favourite videos here..."
          />
          <button className="bg-[#FF0000] w-[5%] rounded-r-full py-2 text-white font-semibold text-md">
            <span>Search</span>
          </button>
        </div>
        <div className="w-[15%] flex items-center justify-end">
          <img src={USER} alt="user" className="mr-2" width={40} />
          <p className="text-sm font-semibold">Nilay Kothekar</p>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
