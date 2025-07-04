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

// getUserDetails('vvsvignesh')

async function getToDos(userId:number){
  const res = await prisma.todos.findMany({where:{userId:userId}})
  console.log('res: ', res);
}
getToDos(1)
async function getToDosAndDetails(userId:number){
  const res = await prisma.todos.findMany({where:{userId:userId},
  select:{
    id:true,
    title:true,
    description:true,
    done:true,
    user:true
  }})


  // console.log('res: ', res);
}
getToDosAndDetails(1)


async function addTodoForUser(userId: number, title: string, description?: string) {
  const res = await prisma.todos.create({
    data: {
      title,
      description,
      userId
    }
  })
  console.log('res: ', res);
}
// addTodoForUser(1, 'This is a new todo', 'This is a description for the new todo')