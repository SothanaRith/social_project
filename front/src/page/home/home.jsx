import Post from "../../coponents/posts/Posts";
import Stories from "../../coponents/stories/Stories";
import "./home.scss"

const Home = ()=>{
    console.log()
    return (
        <div className="Home">
            <Stories/>
            <Post/>

        </div>
    )
}
export default Home;