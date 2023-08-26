import { makeRequest } from "../../axios.js";
import Post from "../Post/Post.jsx";
import "./posts.scss"
import { useQuery } from '@tanstack/react-query'


const Posts = ({userId})=>{

    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
        makeRequest.get("/posts?userId="+userId).then((res)=>{
            return res.data;
        })
         
      })
      console.log(userId)



    return (
        <div className="posts">
            {error ? "Something went wrong!" :(isLoading 
            ? "loading" 
            : data.map(posts=>(<Post post={posts} key={posts.id}/>)))}
        </div>
    )
}
export default Posts;