import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authcontext';


const Comment = ({comment}) => {
    const [desc, setDesc] = useState("")
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)
    const queryClient = useQueryClient()

    
    const deletemutation = useMutation((commentUserId) => {
        console.log(comment.id)
        return makeRequest.delete("/comments/" + comment.id);

    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(["comments"]);
        },
    })


    const handleDelete = () => {
        deletemutation.mutate(comment.userId)

    }

    return (
        <div>
            <MoreHorizOutlinedIcon onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && comment.userId === currentUser.id && <button onClick={handleDelete}>delete</button>}
        </div>
    )
}
export default Comment