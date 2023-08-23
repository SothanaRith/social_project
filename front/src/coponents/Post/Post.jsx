import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false)
    const liked = true;
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="detail">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">{moment(post.createdAt).fromNow()}</span>

                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>

                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/" + post.img} alt="" />

                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <FavoriteOutlinedIcon style={{color: "red"}} /> : <FavoriteBorderOutlinedIcon />}
                        12.34K Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        3.24k Comments
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        754 shares
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id}/>}
            </div>

        </div>
    )
}
export default Post;