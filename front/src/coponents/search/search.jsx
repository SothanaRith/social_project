import { useContext, useState } from "react";
import "./search.scss"
import { AuthContext } from "../../context/authcontext";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";
const Search = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    const { isLoading, error, data } = useQuery({
        queryKey: ["likes"],
        queryFn: () =>
            makeRequest.get("/users/all").then((res) => {
                return res.data;
            })
    })

     // fliter 
     const [query, setQuery] = useState("");
     const search = (data) => {
         return data.filter((item) => item.name.toLowerCase().includes(query) );
     }

    return (
        <div className="search">
            <h1>Your Friends</h1>
            <div className="search">

                <div className="items" onClick={() => setCommentOpen(!commentOpen)}>
                    <SearchOutlinedIcon />

                </div>
                {commentOpen && <input type="text" placeholder="Search" onChange={(e)=> setQuery(e.target.value)}/>}

            </div>
            <div  className="show">
            {error ? "Something went wrong!" : (isLoading
                ? "loading"
                : data.map(item => (
                    

                        <div  className="item" key={item.id}>
                            <Link to={`/profile/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <img src={"/upload/" + item.profilePic} alt="" />
                            </Link>
                            <div className="info">
                                <div className="icon">
                                    <h3>{item.name}</h3>
                                    <p>{item.city}</p>
                                </div>
                                <Link to={`/profile/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                    <button>Profile</button>
                                </Link>

                            </div>

                        </div>

                    
                )))}
                </div>

        </div>
    )
}
export default Search;