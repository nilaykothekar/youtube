import { Fragment, useEffect, useState } from "react";
import {
  HAMBURGER,
  USER,
  YOUTUBE_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../slices/toggleMenuSlice";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      searchSuggesstions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggesstions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    console.log(result[1]);
    setSuggestions(result[1]);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
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
          <div>
            <input
              type="text"
              className="w-[95%] py-2 px-4 rounded-l-full border border-black text-sm"
              placeholder="Please search your favourite videos here..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="bg-[#FF0000] w-[5%] rounded-r-full py-2 text-white font-semibold text-md">
              <span>Search</span>
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed w-[70%] bg-white rounded-lg shadow-lg border border-gray-300 z-10">
              <ul>
                {suggestions.map((suggestion) => {
                  return (
                    <li
                      key={suggestion}
                      className="px-2 py-1 curor-pointer hover:bg-gray-100 flex items-center font-bold text-sm"
                    >
                      <CiSearch />
                      &nbsp;{suggestion}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
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
