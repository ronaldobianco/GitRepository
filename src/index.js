const express = require('express')

const app = express()

app.use(express.json());

 const repoRouter = require('./routes/repoRouter');
 app.use('/' , repoRouter);

// PORT
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log('Listening on port ' , port))