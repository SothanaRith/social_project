import { useContext } from "react";
import "./search.scss"
import { AuthContext } from "../../context/authcontext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";
const Search = () => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["likes"],
        queryFn: () =>
            makeRequest.get("/users/all").then((res) => {
                return res.data;
            })
    })

    console.log(data)
    return (
        <div className="search">
            {error ? "Something went wrong!" :(isLoading 
            ? "loading" 
            : data.map(item => (
                <div key={item.id}>
                   <Link to={`/profile/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}><h1>{item.username}</h1></Link> 
                </div>
            )))}
            

        </div>
    )
}
export default Search;