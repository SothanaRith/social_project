import { makeRequest } from "../../axios.js";
import Post from "../Post/Post.jsx";
import "./posts.scss"
import { useQuery } from '@tanstack/react-query'


const Posts = ()=>{

    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
        makeRequest.get("/posts").then((res)=>{
            return res.data;
        })
         
      })

      console.log(data)

    return (
        <div className="posts">
            {error ? "Something went wrong!" :(isLoading 
            ? "loading" 
            : data.map(posts=>(<Post post={posts} key={posts.id}/>)))}
        </div>
    )
}
export default Posts;