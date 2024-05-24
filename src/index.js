import express from 'express';



const app = express();
app.use(express.json())

app.get('/', function(req, res) {
   res.send('hello world');
})

app.listen(8000, function() {
   console.log(`server running at http://localhost:8000`);
})