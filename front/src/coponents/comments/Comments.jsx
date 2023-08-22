import { useContext } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authcontext"

const Comments = ()=>{
    const {currentUser} = useContext(AuthContext)
    const comments =[
        {
            id:1,
            name: "penhey",
            userId: 1,
            profilePic:"https://i.pinimg.com/736x/c6/1a/c2/c61ac20f152403df1157c2cb7a6f8275.jpg",
            desc: " hahahahha you lose ",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },{
            id:2,
            name: "penhey",
            userId: 2,
            profilePic:"https://i.pinimg.com/736x/c6/1a/c2/c61ac20f152403df1157c2cb7a6f8275.jpg",
            desc: " hahahahha you lose ",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },{
            id:3,
            name: "penhey",
            userId: 3,
            profilePic:"https://i.pinimg.com/736x/c6/1a/c2/c61ac20f152403df1157c2cb7a6f8275.jpg",
            desc: " hahahahha you lose ",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },{
            id:4,
            name: "penhey",
            userId: 4,
            profilePic:"https://i.pinimg.com/736x/c6/1a/c2/c61ac20f152403df1157c2cb7a6f8275.jpg",
            desc: " hahahahha you lose ",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },]

    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>send</button>
            </div>
           {comments.map(comment=>(
            <div className="comment">
                <img src={comment.img} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
           ))}

        </div>
    )
}
export default Comments;
