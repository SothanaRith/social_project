import { useContext, useState } from "react";
import "./share.scss";
import { AuthContext } from "../../context/authcontext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";
const Share = () => {

    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState("");

    const upload = async () => {
        try {
            //we can not send file auto to api so we need to create it
            const formData = new FormData();
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData);
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)

    const queryClient = useQueryClient()

    const mutation = useMutation((newPost) => {
        return makeRequest.post("/posts", newPost);

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    })

    const handleClick = async (e) => {
        e.preventDefault();
        //if we don't have file so we make it to empty string
        let imgUrl = "";
        if (file) imgUrl = await upload()
        mutation.mutate({ desc, img: imgUrl });
        setDesc("")
        setFile(null)


    }
    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <img src={"/upload/" + currentUser.profilePic} alt="" />
                        </Link>
                        <input type="text" placeholder={`What's on Your mind ${currentUser.name}?`}
                            onChange={e => setDesc(e.target.value)}
                            value={desc} />
                    </div>
                    <div className="right">
                        {/* create a fake url to show image */}
                        {file && <img className="file" alt="" src={URL.createObjectURL(file)} />}
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <input type="file" name="" id="file" style={{ display: "none" }}
                            onChange={e => setFile(e.target.files[0])} />
                        <label htmlFor="file">
                            <div className="item">
                                <img src="" alt="" />
                                <span>Add Image</span>
                            </div>
                        </label>
                        {/* <div className="item">
                            <img src="" alt="" />
                            <span>Add Place</span>
                        </div>
                        <div className="item">
                            <img src="" alt="" />
                            <span>Tag Friends</span>
                        </div> */}
                    </div>
                    <div className="right">
                        <button onClick={handleClick}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share;