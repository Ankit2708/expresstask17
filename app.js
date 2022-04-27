const express=require('express');
var cors = require('cors')
const sequelize=require('./util/db')
const userRoutes=require('./routes/user')
const app=express();
app.use(cors())


app.use(express.json());

app.use(userRoutes)


sequelize.sync().then(result=>{
    console.log('data base connected');
    
    app.listen(3000);
})