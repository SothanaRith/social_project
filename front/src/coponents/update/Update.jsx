import { useContext, useEffect, useState } from "react"
import "./update.scss"
import { makeRequest } from "../../axios"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/authcontext";
import axios from "axios";



const Update = ({ setOpenUpdate, user }) => {
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const { currentUser } = useContext(AuthContext)


    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "",
    })
    useEffect(() => {
        makeRequest.get("/users/find/" + currentUser.id).then((res) => {
            setTexts(res.data);
        }).catch((err) =>
            console.log(err))
    }, [currentUser.id])




    const upload = async (file) => {
        try {
            //we can not send file auto to api so we need to create it
            const formData = new FormData();
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData);
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    const handlechange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))

    }
    const queryClient = useQueryClient()

    const mutation = useMutation((user) => {
        return makeRequest.put("/users", user,texts);

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["user"]);
        },
    })

    const handleClick = async (e) => {
        e.preventDefault();
        //if we don't have file so we make it to empty string
        let coverUrl;
        let profileUrl;

        coverUrl = cover ? await upload(cover) : user.coverPic;
        profileUrl = profile ? await upload(profile) : user.profilePic;


        mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
        setOpenUpdate(false)
    }

    return (
        <div className="update">
            <button onClick={() => setOpenUpdate(false)}>X</button>
            <h1>update Profile</h1>
            <form>
                <div className="file">
                    <div className="coverPic">
                        <h1>Cover Picture</h1>
                        <input type="file" name="" id="" onChange={e => setCover(e.target.files[0])} required />
                    </div>
                    <div className="profilePic">
                        <h1>Profile Picture</h1>
                        <input type="file" name="" id="" onChange={e => setProfile(e.target.files[0])} required />
                    </div>


                </div>
                <div className="data">
                    <input type="text" name="name" value={texts.name} onChange={handlechange} id="" placeholder="your Name" required="ture" />
                    <input type="text" name="city" value={texts.city} onChange={handlechange} id="" placeholder="Your city" required />
                    <input type="text" name="website" value={texts.website} onChange={handlechange} id="" placeholder="Your website" required />
                </div>


                <button onClick={handleClick}>Update</button>
            </form>

        </div>
    )
}

export default Update;