import { data } from "../data"
import "../styles/profile.css"

function Profile() {
    return (
        <div className="profile">
            <p className="head">Profile</p>
            <p className="profilecontent">{data.user.profile}</p>
        </div>
    )
}

export default Profile