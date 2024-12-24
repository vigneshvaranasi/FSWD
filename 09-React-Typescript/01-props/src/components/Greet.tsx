
type greetProps ={
    name:string
    age?:number
    isLoggedIn:boolean
}

function Greet(props:greetProps) {
    const {age=18} = props
    return (
        <div>
            {
                props.isLoggedIn ? <h2>Welcome {props.name}</h2> : <h2>Please Login</h2>
            }
            <h2>
                Hello I am {props.name}, I am {age} years old
            </h2>   
            <br />
        </div>
    )
}

export default Greet