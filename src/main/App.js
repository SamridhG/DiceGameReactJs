import React from "react";
import ReactDom from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const AppLayout=()=>{
    return (
        <div>Hello World</div>
    )
}
const Error=()=>{
    return (
        <div>Hello Error</div>
    )
}
const Game=()=>{
    return (
        <div>Hello Game</div>
    )
}
const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<Error/>
    },
    {
        path:'/gameplay',
        element:<Game/>
    }

])
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)