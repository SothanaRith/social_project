import React from "react";
import "../chat.scss"

const Input = () => {
    return (
        <div className="Input">
            <input type="text" placeholder="សរសេរអ្វីខ្លះទៅ..." />
            <div className="send">
                <img src="" alt="" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <img src="" alt="" />
                </label>
                <button>Send</button>
            </div>

            

        </div>
    )
}
export default Input