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

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://i.pinimg.com/564x/1f/be/e7/1fbee78b01aef29523f128d5c0f535f5.jpg" alt="" className="cover" />
                <img src="https://i.pinimg.com/564x/6e/ca/ef/6ecaefd2795732f273fb8a9cab304bd0.jpg" alt="" className="profilePic" />

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
                        <span>narith</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>Cambodia</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>narith.dev</span>
                            </div>
                        </div>

                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailIcon />
                        <MoreVertIcon />
                    </div>

                </div>
                <Posts />
            </div>

        </div>

    )
}
export default Profile;