import React from "react";
import Sidebar from "../conponent/Sidebar";
import Chat from "../conponent/chat";
import "../chat.scss"

const HomeChat = ()=>{
    return(
        <div className="HomeChat">
            <div className="container">
                <Sidebar/>
                <Chat/>

            </div>

        </div>
    )
}
export default HomeChat