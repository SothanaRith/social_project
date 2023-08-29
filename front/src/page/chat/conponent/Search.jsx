import React from "react";
import "../chat.scss"

const Search = ()=>{
    return(
        <div className="Search">
            <div className="searchForm">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="userChat">
                <img src="" alt="" />
                <div className="userChatInfo">
                    <span>Name</span>
                </div>
            </div>

        </div>
    )
}
export default Search