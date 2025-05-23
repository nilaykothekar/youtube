import { Fragment } from "react";
import Sidebar from "./Sidebar";
import Chips from "./Chips";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <Fragment>
      <section className="flex">
        <Sidebar />
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Body;
