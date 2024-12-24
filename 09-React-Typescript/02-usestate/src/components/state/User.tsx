import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}
function User () {
  const [user, setUser] = useState<null | AuthUser>(null)

  //   type assertion
  //   const [user, setUser] = useState<AuthUser>({} as AuthUser)

  function handleLogin () {
    setUser({
      name: 'Vignesh',
      email: 'varanasivsv@gmail.com'
    })
  }
  function handleLogout () {
    setUser(null)
  }
  return (
    <div>
      <h1>Future State</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <div>
          <h1>User name:{user.name}</h1>
          <h1>User email:{user.email}</h1>
        </div>
      ) : null}
    </div>
  )
}

export default User
