import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Do POST request to this endpoint')
})

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log('body: ', body);
  console.log("Header",c.req.header('Authorization'));
  console.log("Query",c.req.query('name'));
  return c.text('Hello Hono!')
})

export default app
