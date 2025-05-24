import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../slices/toggleMenuSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  // console.log(params.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <Fragment>
      <div className="p-4">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Fragment>
  );
};

export default WatchPage;
