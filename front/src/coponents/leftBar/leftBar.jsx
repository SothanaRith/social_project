import "./leftBar.scss"
import Friends from "../../assets/friends.png"
import Group from "../../assets/group.png"
import Market from "../../assets/market.png"
import Watch from "../../assets/watch.png"
import Memories from "../../assets/memories.png"
import Events from "../../assets/event.png"
import Gaming from "../../assets/gaming.png"
import Gallery from "../../assets/gallery.png"
import Videos from "../../assets/video.png"
import Messages from "../../assets/message.png"
import Tutorials from "../../assets/tutorial.png"
import Courses from "../../assets/courses.png"
import Fund from "../../assets/fund.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/authcontext"
const LeftBar = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}><div className="user" >
                        <img src={"/upload/"+currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                    </div></Link>
                    <Link to="/friend" style={{ textDecoration: "none", color: "inherit" }}><div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div></Link>
                    <div className="item">
                        <img src={Group} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" />
                        <span>MarketPlace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>



                </div>
                <hr />

                <div className="menu">
                    <span>Your shortcut</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>

                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Fundraiser</span>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default LeftBar;