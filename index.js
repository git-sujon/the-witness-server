const exprees= require('express')
const app= exprees()
const port= process.env.PORT || 5000
const catagories= require('./data/catagories.json')
const cors= require('cors')

app.use(cors())


app.get('/', (req, res) => {
    res.send ('THis is the witness server')
})

app.get('/news-catagories/', (req, res) => {
    res.send(catagories)
})


app.listen(port, ()=> {
    console.log('Server rinning on .......', port);
})