import Post from "../Post/Post.jsx";
import "./posts.scss"

const Posts = ()=>{

    //temporary
    const posts =[
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
        },{
            id:5,
            name: "penhey",
            userId: 5,
            profilePic:"https://i.pinimg.com/736x/c6/1a/c2/c61ac20f152403df1157c2cb7a6f8275.jpg",
            desc: " hahahahha you lose ",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },{
            id:6,
            name: "penhey",
            userId: 6,
            profilePic:"https://i.pinimg.com/736x/c6/1a/c2/c61ac20f152403df1157c2cb7a6f8275.jpg",
            desc: " hahahahha you lose ",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },
    ];
    return (
        <div className="posts">
            {posts.map(posts=>(
                <Post post={posts} key={posts.id}/>

            ))}

        </div>
    )
}
export default Posts;