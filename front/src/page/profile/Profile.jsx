import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../coponents/posts/Posts";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authcontext";
import Update from "../../coponents/update/Update";

const Profile = () => {
    const [openUpdate, setOpenUpdate] = useState(false)
    const {currentUser} = useContext(AuthContext);

    const userId = parseInt(useLocation().pathname.split("/")[2])

    const { isLoading, error, data } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            makeRequest.get("/users/find/" + userId).then((res) => {
                return res.data;
            })

    })

    const {isLoading: rIsLoading, data: relationshipData } = useQuery({
        queryKey: ["relationship"],
        queryFn: () =>
            makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
                return res.data;
            })

    })
   
    const queryClient = useQueryClient()

    const mutation = useMutation((following) => {
        if (following) return makeRequest.delete("/relationships?userId="+ userId);
        return makeRequest.post("/relationships", { userId });

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["relationship"]);
        },
    })


    const handleFollow = () => {
        mutation.mutate(relationshipData.includes(currentUser.id))

    }

    return (
        <div className="profile">
            {isLoading ? "Loading" : <><div className="images">
                <img src={"/upload/"+data.coverPic} alt="" className="cover" />
                <img src={"/upload/"+data.profilePic} alt="" className="profilePic" />

            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left" >
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <TelegramIcon fontSize="large" />
                        </a>



                    </div>
                    <div className="center">
                        <span>{data.name}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>{data.city}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>{data.website}</span>
                            </div>
                        </div>

                        {rIsLoading ? "Loading" : userId === currentUser.id 
                        ? (<button onClick={()=>setOpenUpdate(true)}>update</button>) 
                        : <button onClick={handleFollow}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>}
                    </div>
                    <div className="right">
                        <EmailIcon />
                        <MoreVertIcon />
                    </div>

                </div>
                <Posts userId={userId}/>
            </div></>}
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}

        </div>

    )
}
export default Profile;