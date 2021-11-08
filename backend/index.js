const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const port = 3000
const {pool} = require('./db')
const path = require('path')


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', async (req, res) => {
  const response = await pool.query('SELECT * FROM measure');
  res.send(response.rows);
})

app.post('/data', async (req,res) => {
  const {ligth,temperature,person_number} = req.body;
  await pool.query(`
    INSERT INTO measure (ligth,temperature,person_number)
    VALUES (${ligth},${temperature},${person_number});
  `)

  res.send('data save')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})