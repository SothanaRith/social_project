import React from "react";
import "../chat.scss"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Messages from "./Messages";
import Input from "./input";


const Chat = () => {
    return (
        <div className="Chat">
            <div className="chatInfo">
                <span>Username</span>
                <div className="chatIcon">
                    <MoreHorizOutlinedIcon />


                </div>

            </div>
            <Messages />
            <Input/>
        </div>
    )
}
export default Chat