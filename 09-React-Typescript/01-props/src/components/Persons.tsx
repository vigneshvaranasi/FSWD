type personsListprops={
    names:{
        firstName:string
        lastName:string
    }[]
}
function Persons(props:personsListprops) {
  return (
    <div>
        <h2>Hello,</h2>
        {
            props.names.map((name)=>{
                return <h2 key={name.firstName}>{name.firstName} {name.lastName}</h2>
            })
        }
    </div>
  )
}

export default Persons