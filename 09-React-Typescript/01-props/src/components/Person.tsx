import { personProps } from "./Person.types"
function Person(props:personProps) {
  return (
    <div>
        <h2>Hello {props.name.firstName} {props.name.lastName}</h2>
        <br />
    </div>
  )
}

export default Person