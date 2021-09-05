import express from 'express'

const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.send(req.body)
})

app.post('/test-post', (req, res) => {
  return res.send('Olá NLW => Method Post')
})

app.listen(3000, () => {
  console.log(`Running on PORT ${PORT}`)
})
