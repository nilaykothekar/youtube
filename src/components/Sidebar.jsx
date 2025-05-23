import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { TbPlaylist } from "react-icons/tb";
import { FiVideo } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => {
    return state.toggleMenu.isMenuOpen;
  });

  // early return
  if (!isMenuOpen) return null;

  return (
    <Fragment>
      <aside className="w-[10%] min-h-screen shadow-lg py-8">
        <ul className="px-2">
          <li className="font-bold text-sm my-4">
            <Link to="/" className="flex items-center">
              <span>
                <FaHome />
              </span>
              &nbsp;Home
            </Link>
          </li>
          <li className="font-bold text-sm my-4 flex items-center">
            <span>
              <SiYoutubeshorts />
            </span>
            &nbsp;Shorts
          </li>
          <li className="font-bold text-sm my-4 flex items-center">
            <span>
              <MdSubscriptions />
            </span>
            &nbsp;Subscriptions
          </li>
        </ul>
        <hr className="w-full border border-gray-300" />
        <h3 className="font-bold text-md px-4 my-4">You</h3>
        <ul className="px-2">
          <li className="text-sm my-4 flex items-center">
            <span>
              <FaHistory />
            </span>
            &nbsp;History
          </li>
          <li className="text-sm my-4 flex items-center">
            <span>
              <TbPlaylist />
            </span>
            &nbsp;Playlists
          </li>
          <li className="text-sm my-4 flex items-center">
            <span>
              <FiVideo />
            </span>
            &nbsp;Your videos
          </li>
          <li className="text-sm my-4 flex items-center">
            <span>
              <BiLike />
            </span>
            &nbsp;Liked videos
          </li>
          <li className="text-sm my-4 flex items-center">
            <span>
              <MdOutlineWatchLater />
            </span>
            &nbsp;Watch later
          </li>
        </ul>
        <hr className="w-full border border-gray-300" />
      </aside>
    </Fragment>
  );
};

export default Sidebar;
