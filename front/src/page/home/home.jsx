import Post from "../../coponents/posts/Posts";
import Share from "../../coponents/share/Share";
import Stories from "../../coponents/stories/Stories";
import "./home.scss"

const Home = ()=>{
    return (
        <div className="Home">
            <Stories/>
            <Share/>
            <Post/>

        </div>
    )
}
export default Home;