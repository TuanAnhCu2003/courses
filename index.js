// Nạp express vào, trong node_modules
const express = require('express')
// gán cho app = hàm express
// => app = express
const app = express()
const port = 3000

// Route(tự định nghĩa tuyến đường tới cho trang web,
//  vd: /tin-tuc)
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})