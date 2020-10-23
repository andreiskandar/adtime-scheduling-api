const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
// const router = require("./routes/users");

const app = express()

app.use(morgan('dev'))

for (const [mountPoint, router] of Object.entries(routes)) {
  app.use(mountPoint, router)
}

const port = 3001
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
