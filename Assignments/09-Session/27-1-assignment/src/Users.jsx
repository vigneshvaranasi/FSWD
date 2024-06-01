import './Users.css'

function Users(props){
    return (
        <>
            <div className='card'>
                <img  className="pic" src={props.data.image} alt="" />
                <h2>{props.data.name}</h2>
                <p>{props.data.role}</p>
            </div>
        </>
    )

}
export default Users;