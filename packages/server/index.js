import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 8080

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/search', async function (req, res) {
  const query = new URLSearchParams(req.query).toString()
  const response = await fetch(`https://itunes.apple.com/search?${query}`)
  const json = await response.json()
  res.setHeader('Content-Type', 'application/json')
  res.send(json)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
