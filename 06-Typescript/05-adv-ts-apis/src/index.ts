// Pick
interface User {
  id: string
  name: string
  age: number
  email: string
  password: string
}
type updatedUser = Pick<User, 'name' | 'age' | 'email'>

function updateUserData (updatedProps: updatedUser) {
  // write logic here
}

updateUserData({
  name: 'vignesh',
  age: 25,
  email: 'varanasivsv@gmail.com'
})

// this will give error because we have to give all the properties defined in updatedUser
// updateUserData({
//     name:"vignesh",
// })

// Partial
type updatePropsOptional = Partial<updatedUser>
function updateUserDataOptional (updatedProps: updatePropsOptional) {
  // write logic here
}

// this will not give error because we have made all the properties optional
updateUserDataOptional({
  name: 'Vignesh'
})

// Readonly

type ReadonlyUser = {
  readonly name: string
  age: number
}

const user: ReadonlyUser = {
  name: 'Vignesh',
  age: 20
}

// user.name = "Vignesh Varanasi" // this will give error because name is readonly
user.age = 21 // this will not give error because age is not readonly

// If we want to make all the properties of a type readonly, we can use Readonly utility type
const user1: Readonly<ReadonlyUser> = {
  name: 'Vignesh',
  age: 20
}

// Record & Map

// without record
type UserAge = {
  [key: string]: number
}
const userAge: UserAge = {
  Vignesh: 20,
  Sai: 19
}

// with record
type UserAgeRecord = Record<string, number>
const userAgeRecord: UserAgeRecord = {
  Vignesh: 20,
  Sai: 19
}

// Map
const usersMap = new Map<string, { name: string; age: number }>()
usersMap.set('id1', {
  name: 'Vignesh',
  age: 20
})
usersMap.set('id2', {
  name: 'Sai',
  age: 19
})
console.log(usersMap.get('id1'))


// Exclude
type EventType = 'click' | 'hover' | 'focus' | 'blur'
type NonClickEventType = Exclude<EventType, 'click'>
function handleNonClickEvent(event:NonClickEventType){
    // write logic here
}
// handleNonClickEvent('click') // this will give error because 'click' is excluded from NonClickEventType
handleNonClickEvent('hover') // this will not give error because 'hover' is included in NonClickEventType