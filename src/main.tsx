import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { LucideMessageSquareWarning } from "lucide-react";
import Movies from "./Pages/Movies/Movies";



const router =createBrowserRouter([
{
  path: "/",
  element: <Movies />,
}
    
     
   
]);
ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
      <RouterProvider router={router}/>
      <Toaster position={'bottom-center'}  icons={{warning:<LucideMessageSquareWarning/>}} theme="dark"/>
  </React.StrictMode>
);
