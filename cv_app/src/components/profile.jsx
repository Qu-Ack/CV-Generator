import "../styles/profile.css"

function Profile({info}) {
    return (
        <div className="profile">
            <p className="head">Profile</p>
            <p className="profilecontent">{info.profile}</p>
        </div>
    )
}

export default Profile