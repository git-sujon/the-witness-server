const exprees= require('express')
const app= exprees()
const port= process.env.PORT || 5000
const cors= require('cors')
const catagories= require('./data/catagories.json')
const news= require('./data/news.json')
app.use(cors())


app.get('/', (req, res) => {
    res.send ('THis is the witness server')
})

app.get('/news-catagories/', (req, res) => {
    res.send(catagories)
})

app.get('/news/:id', (req,res )=>{
    const id=req.params.id
    const selectedNews= news.find(n =>n._id === id)
    res.send(selectedNews)
})

app.get( '/news', (req, res) => {
    res.send(news)
})

app.get('/catagories/:id', (req, res)=> {
    const categoryId= req.params.id

    if (categoryId === '08') {
        res.send(news)
    }
    else{
        const categoryNews= news.filter(category=> category.category_id === categoryId)
        res.send(categoryNews)
    }
   
})




app.listen(port, ()=> {
    console.log('Server rinning on .......', port);
})