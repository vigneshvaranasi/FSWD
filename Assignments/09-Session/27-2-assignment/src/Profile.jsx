import './Profile.css'

function Profile(props){
    return (
        <>
        <div className='card'>
            <div className="profile">
                <div className="banner">
                    <img src={props.post.banner} alt="" />
                </div>
                <div className="profilepic">
                    <img src={props.post.profile} alt="" />
                </div>
                <div className="content">
                    <h2>{props.post.heading}</h2>
                    <p>{props.post.des}</p>
                    <p>{props.post.name}</p>
                    <p>{props.post.date}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Profile;