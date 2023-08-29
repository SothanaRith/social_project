import React, { useContext } from "react";
import "../chat.scss"
import { AuthContext } from "../../../context/authcontext";

const Navbar = ()=>{
    const {currentUser} = useContext(AuthContext);

    return(
        <div className="Navbar">
            <span className="logo">
                MANOREA
            </span>
            <div className="user">
                <img src={"/upload/"+currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>

            </div>

        </div>
    )
}
export default Navbar