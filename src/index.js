require('dotenv').config()

const express = require('express')
var cors = require('cors')
const app = express()

app.use(express.json());

 const repoRouter = require('./routes/repoRouter');
 app.use(cors())
 app.use('/' , repoRouter);
// PORT
const port = process.env.PORT || 3100
app.listen(port, ()=> console.log('Listening on port ' , port))