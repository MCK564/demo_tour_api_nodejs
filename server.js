const express= require("express")
const bodyParser = require('body-parser');
const tourRoutes = require('./routes/tour');

const app = express();

const PORT = 3000;

app.use(bodyParser.json())
app.use('/api/tours', tourRoutes);

app.listen(PORT,() =>  {
    console.log(`server is running at port ${PORT}`)
})

