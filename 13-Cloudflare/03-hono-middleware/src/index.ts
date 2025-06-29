import { Hono } from 'hono'
import { auth } from 'hono/utils/basic-auth'

const app = new Hono()

async function authMiddleware(c:any,next:any){
  if(c.req.header('Authorization')) {
    // do validation
    await next()
  }
  else{
    return c.text("You Dont have access")
  }  
}
// app.use(authMiddleware) this also can be used

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('/protectedRoute',authMiddleware, (c) => {
  return c.text('Hello Hono!')
})

export default app
