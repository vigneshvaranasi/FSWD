import './App.css';
function App() {

  let name = "State in React";
  let skills = ["HTML", "CSS", "JS"]
  let person = {
    name: "Vignesh",
    age: 18,
    skills: ["HTML", "CSS", "JS","React"]
  }

  let students = [
    {name: "Vignesh", age: 18,Role: "Developer"},
    {name: "Eswar", age: 19,Role: "Designer"},
    {name: "Fakruddin", age: 20,Role: "Tester"},
    {name: "Pavan", age: 19,Role: "Developer"},
  ]
  return (
    <div>
      <h1>{name}</h1>
      {
        skills.map((skill, index) => (
          <h3 key={index}>{skill} - {index}</h3>
        ))
      }
      <h1>Person Data</h1>
      <h2>Name:{person.name}</h2>
      <h2>Age:{person.age}</h2>
      <h2>Skills:</h2>
      {
        person.skills.map((skill, index) => (
          <h4 key={index}>{skill} - {index}</h4>
        ))
      }

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.Role}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;