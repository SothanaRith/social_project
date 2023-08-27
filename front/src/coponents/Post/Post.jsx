import "./post.scss"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authcontext";

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes", post.id],
        queryFn: () =>
            makeRequest.get("/likes?postId=" + post.id).then((res) => {
                return res.data;
            })

    })

    const queryClient = useQueryClient()

    const mutation = useMutation((liked) => {
        if (liked) return makeRequest.delete("/likes?postId=" + post.id);
        return makeRequest.post("/likes", { postId: post.id });

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["likes"]);
        },
    })

    const deletemutation = useMutation((postId) => {
        
        return makeRequest.delete("/posts/" + postId);

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    })



    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id))

    }
    const handleDelete = () => {
        console.log(post.id)
        deletemutation.mutate(post.id)

    }



    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <img src={"/upload/" + post.profilePic} alt="" />
                        </Link>
                        <div className="detail">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">{moment(post.createdAt).fromNow()}</span>

                        </div>
                    </div>
                    <MoreHorizOutlinedIcon onClick={() => setMenuOpen(!menuOpen)} />
                    {menuOpen && post.userId === currentUser.id && <button onClick={handleDelete}>delete</button>}
                </div>

                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"../upload/" + post.img} alt="" />

                </div>
                <div className="info">
                    <div className="item">
                        {isLoading
                            ? ("Loading")
                            : data.includes(currentUser.id) ? (
                                <FavoriteOutlinedIcon style={{ color: "red" }} onClick={handleLike} />
                            ) : (<FavoriteBorderOutlinedIcon onClick={handleLike} />
                            )}
                        {data} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        Comments
                    </div>
                    {/* <div className="item">
                        <ShareOutlinedIcon />
                        shares
                    </div> */}
                </div>
                {commentOpen && <Comments postId={post.id} />}
            </div>

        </div>
    )
}
export default Post;