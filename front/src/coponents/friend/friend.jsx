import axios from "axios";
import "./friend.scss"
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import Friends from "../friends/friends";


const Friend = ({ userId }) => {
    const [list, setList] = useState([])

    const [commentOpen, setCommentOpen] = useState(false);
    const { isLoading, error, data } = useQuery({
        queryKey: ["friend"],
        queryFn: () =>
            makeRequest.get("/users?userId = " + userId).then((res) => {
                setList(res.data)
                return res.data;
            })

    })

    // fliter 
    const [query, setQuery] = useState("");
    const search = (data) => {
        return data.filter((item) => item.name.toLowerCase().includes(query) );
    }

    return (
        <div className="friend">
            <h1>Friends</h1>
            <div className="search">

                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                    <SearchOutlinedIcon />

                </div>
                {commentOpen && <input type="text" placeholder="Search" onChange={(e)=> setQuery(e.target.value)}/>}

            </div>
            {error ? "Something went wrong!" : (isLoading
                ? "loading"
                : <Friends data={search(list)} />)}
                
        </div>
    )
}
export default Friend;