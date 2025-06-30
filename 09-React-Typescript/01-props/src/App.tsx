import Greet from "./components/Greet"
import Person from "./components/Person"
import Persons from "./components/Persons"
import Status from "./components/Status"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"
function App() {
  let personName = {
    firstName: "Vignesh",
    lastName: "Varanasi"
  }

  let personsList = [
    {
      firstName: "Vignesh",
      lastName: "Varanasi"
    },
    {
      firstName: "Eswar",
      lastName: "Aditya"
    },
    {
      firstName: "Fakruddin",
      lastName: "Shaik"
    }
  ]
  return (
    <div>
      <h1>Props Example in Typescript</h1>
      <Greet name="Vignesh Varanasi" age={20} isLoggedIn={false} />
      <Person name={personName} />
      <Persons names={personsList} />
      <Status status="Loading" />
      <Heading>
        This is Heading Component
      </Heading>
      <Oscar>
        <Heading>
          This is Oscar Component
        </Heading>
      </Oscar>
      <Greet name="Vignesh Varanasi" isLoggedIn={false} />
    </div>
  )
}

export default App