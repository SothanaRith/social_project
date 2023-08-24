import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authcontext";

const Stories = ()=>{

    const {currentUser} = useContext(AuthContext)
    //temporary
    const stories =[
        {
            id:1,
            name: "penhey",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },{
            id:2,
            name: "penhey",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },{
            id:3,
            name: "penhey",
            img: "https://i.pinimg.com/564x/dd/8f/50/dd8f505678135e2b24a717fe5c8b3af2.jpg"
        },
    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
           {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
           ))}

        </div>
    )
}
export default Stories;