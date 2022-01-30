import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.get('/api/demo1', (req, res) => {
  res.json('hi, there !')
})

app.get('/api/user', (req, res) => {
  res.json({ 
    name: 'Harry Porter',
    email: 'stephenlai2015@gmail.com',
    password: '12345678'
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server running on port', + port))