import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../slices/toggleMenuSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  console.log(params.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <Fragment>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mX3ZWEG9lyw?si=rrTzVkjKFVf8zkiV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </Fragment>
  );
};

export default WatchPage;
