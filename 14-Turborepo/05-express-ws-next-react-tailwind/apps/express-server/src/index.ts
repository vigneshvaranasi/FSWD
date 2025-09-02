import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send({
    message: 'Hello from HTTP Server!'
  })
})

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})
