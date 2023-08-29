import React from "react";
import "../chat.scss"
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./chats";

const Sidebar = ()=>{
    return(
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>

        </div>
    )
}
export default Sidebar