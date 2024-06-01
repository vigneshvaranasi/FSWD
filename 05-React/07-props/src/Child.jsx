import './Child.css'
function Child1(props) {
    console.log(props);
    return (
        <div className='card'>
            <h2>{props.person.name}</h2>
            <h2>{props.person.age}</h2>
            <h2>{props.person.role}</h2>
            <img src={props.person.image} alt='logo' />
        </div>
    );
}
export default Child1;