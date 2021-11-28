const express = require('express')
const ReactDOMServer = require("react-dom/server")
const fs = require('fs');
const path = require('path');

const ServerApp = require('../../dist/ServerApp').default

const app = express()
const port = process.env.PORT || 5000

const htmlTemplate = fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf-8')

const AppString = ReactDOMServer.renderToString(ServerApp)

const showHtml = htmlTemplate.replace('<!-- App -->', AppString)
console.log(showHtml)
app.listen(port, () => {
    console.log(`server start on port ${port}`)
})

app.use('/public',express.static(path.resolve(__dirname, '../../dist')))

app.get('/', (req, res) => {
    res.send(showHtml)
})