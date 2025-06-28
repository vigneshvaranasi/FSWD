import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type User = {
  email: string
  firstName: string
  lastName?: string
  username: string
  password: string
}

async function insertUser ({
  email,
  firstName,
  lastName,
  username,
  password
}: User) {
  const res = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      username,
      password
    },
    select: {
      id: true,
      firstName: true,
      password: true
    }
  })
  console.log('res: ', res)
}

let userDetails: User = {
  email: 'varanasivsv@gmail.com',
  firstName: 'Vignesh',
  lastName: 'Varanasi',
  username: 'vvsvignesh',
  password: 'thisismypassword'
}
// insertUser(userDetails).then(() => {
//   console.log('User inserted successfully')
// })

interface UpdateParams {
  username: string
  firstName: string
  lastName?: string
}

async function updateUser ({ username, firstName, lastName }: UpdateParams) {
  const res = await prisma.user.update({
    where: { username: username },
    data: {
      firstName,
      lastName
    }
  })
  console.log('res: ', res)
}

// updateUser({
//   username: 'vvsvignesh',
//   firstName: 'Vijaya Sai Vignesh',
//   lastName: 'Varanasi'
// }).then(() => {
//   console.log('User updated successfully')
// })


async function getUserDetails(username:string) {
    const user = await prisma.user.findFirst({
      where:{username:username}
    })
    console.log('user: ', user);
}

getUserDetails('vvsvignesh')