const express = require('express')
const fetch = require('node-fetch')
const xml2js = require('xml2js')

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

app.get('/api/search', async function (req, res) {
  const query = new URLSearchParams(req.query).toString()
  const response = await fetch(`https://itunes.apple.com/search?${query}`)
  const json = await response.json()
  res.setHeader('Content-Type', 'application/json')
  res.send(json)
})

app.get('/api/lookup', async function (req, res) {
  const query = new URLSearchParams(req.query).toString()
  const response = await fetch(`https://itunes.apple.com/lookup?${query}`)
  const json = await response.json()
  res.setHeader('Content-Type', 'application/json')
  res.send(json)
})

app.get('/api/feed', async function (req, res) {
  const url = req.query.url
  const response = await fetch(url)
  const text = await response.text()
  const parser = new xml2js.Parser()
  const feed = await parser.parseStringPromise(text)

  const feedChannel = feed.rss.channel[0]
  const items = feedChannel.item
    .filter(({ enclosure }) => enclosure)
    .map((feedItem) => {
      const enclosure = feedItem.enclosure[0]['$']
      return {
        title: feedItem.title[0],
        link: feedItem.link[0],
        description: feedItem.description[0],
        date: feedItem.pubDate[0],
        enclosure
      }
    })
  const meta = {
    title: feedChannel.title[0],
    description: feedChannel.description[0],
    image: feedChannel.image[0].url[0],
    author: feedChannel['itunes:author'][0]
  }
  const cleanFeed = {
    meta,
    items
  }

  res.setHeader('Content-Type', 'application/json')
  res.send(cleanFeed)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
