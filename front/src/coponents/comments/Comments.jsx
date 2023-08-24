import { useContext, useState } from "react"
import "./comments.scss"
import { AuthContext } from "../../context/authcontext"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../axios"


import moment from "moment";

const Comments = ({ postId }) => {
    const [desc, setDesc] = useState("")
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
        queryKey: ["comments"],
        queryFn: () =>
            makeRequest.get("/comments?postId=" + postId).then((res) => {
                return res.data;
            })

    })

    const queryClient = useQueryClient()

    const mutation = useMutation(
        (newComment) => {
            return makeRequest.post("/comments", newComment);

        }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["comments"]);
        },
    })

    const handleClick = async (e) => {
        e.preventDefault();
        mutation.mutate({ desc, postId });
        setDesc("")

    }


    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment"
                    value={desc}
                    onChange={e => setDesc(e.target.value)} />
                <button onClick={handleClick}>send</button>
            </div>
            {isLoading
                ? "Loading"
                : data.map(comment => (
                    <div className="comment" key={comment.id}>
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>
                    </div>
                ))}

        </div>
    )
}
export default Comments;
