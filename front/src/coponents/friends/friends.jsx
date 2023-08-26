import "./friends.scss"
import { Link } from "react-router-dom";
const Friends = ({ data }) => {

    return (
        <div className="friends">
            {data.map(posts => (
                <div className="item" key={posts.id}>
                    <img src={"/upload/"+posts.profilePic} alt="" />
                    <div className="info">
                        <Link to={`/profile/${posts.id}`} style={{ textDecoration: "none", color: "inherit" }}><h1>{posts.name}</h1></Link>
                        <p>Your Friend</p>
                    </div>


                </div>
            ))}
        </div>
    )

}
export default Friends;