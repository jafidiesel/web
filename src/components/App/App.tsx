import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cv from "../Cv/Cv";
import Dj from "../Dj/Dj";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cv />
    },
    {
      path: "/music",
      element: <Dj />
    },
    {
      path: "*",
      element: <p>Page not found</p>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
