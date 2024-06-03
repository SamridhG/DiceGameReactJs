import React from "react";
import ReactDom from "react-dom/client"
import LandingPage from "../component/LandingPage";
import GamePlayScreen from "../component/GamePlayScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Error=()=>{
    return (
        <div>Hello Error</div>
    )
}
const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<LandingPage/>,
      errorElement:<Error/>
    },
    {
        path:'/gameplay',
        element:<GamePlayScreen/>
    }

])
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)