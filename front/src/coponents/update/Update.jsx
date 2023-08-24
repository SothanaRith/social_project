import { useState } from "react"
import "./update.scss"
import { makeRequest } from "../../axios"
import { useMutation, useQueryClient } from "@tanstack/react-query";



const Update = ({ setOpenUpdate, user }) => {
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "",
    })

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
        return makeRequest.put("/users", user);

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
            update
            <form>
                <input type="file" name="" id="" onChange={e=>setCover(e.target.files[0])}/>
                <input type="file" name="" id="" onChange={e=>setProfile(e.target.files[0])} />
                <input type="text" name="name" onChange={handlechange} id="" />
                <input type="text" name="city" onChange={handlechange} id="" />
                <input type="text" name="website" onChange={handlechange} id="" />
                <button onClick={handleClick}>Update</button>
            </form>
            <button onClick={() => setOpenUpdate(false)}>X</button>
        </div>
    )
}

export default Update;