import React from "react";
import {Routes,Route,} from "react-router-dom";
import Home from './Home'
import NotFound from './404'


export default function App(){
    return(
        <Routes>
            <Route element={<Home/>} exact path="/" ></Route>
            <Route element={<NotFound/>} exact path="/404" ></Route>
        </Routes>
    )
}