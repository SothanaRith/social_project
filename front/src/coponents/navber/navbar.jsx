import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModecontext";
import { AuthContext } from "../../context/authcontext";


const Navbar = () => {


    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser,logout } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}><span>MANOREA</span></Link>
                <HomeOutlinedIcon />
                {darkMode ? (
                    <LightModeIcon onClick={toggle} />

                ) : (
                    <DarkModeOutlinedIcon onClick={toggle} />
                )}
                <WidgetsOutlinedIcon />

                
                <Link to="/search" style={{ textDecoration: "none" }}><div className="searchs" >
                    <SearchOutlinedIcon />
                    
                </div></Link>
                
                
                

            </div>
            <div className="right">
                {currentUser ? <PersonOutlineOutlinedIcon onClick={logout} /> : <Link to={"/login"}>Login</Link>}
                <EmailOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <div className="user">
                    <img src={"/upload/"+currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>

            </div>
            


        </div>
    )
}
export default Navbar;