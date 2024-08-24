import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import Search from "../pages/Search";

const router = createBrowserRouter([
   {
    path : "/" , 
    element : React.createElement(App)  ,
    children : [
        {
            path : "",
            element : React.createElement(Home) 
        } , 
        {
            path : ":explore" , 
            element : React.createElement(Explore)
        } , 
        {
            path : ":explore/:id" , 
            element : React.createElement(Details)
        },
        {
            path : "/search" , 
            element : React.createElement(Search)
        }
    ]
   }
])


export default router