import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cv from "../Cv/Cv";
import Dj from "../Dj/Dj";
import Home from "../Home/Home";
import Presskit from "../Presskit/Presskit";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/music",
      element: <Dj />
    },
    {
      path: "/cv",
      element: <Cv />
    },
    {
      path: "/presskit",
      element: <Presskit />
    },
    {
      path: "*",
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
