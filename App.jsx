import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chips from "./src/components/Chips";
import VideoContainer from "./src/components/VideoContainer";
import WatchPage from "./src/pages/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Chips />
            <VideoContainer />
          </div>
        ),
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
