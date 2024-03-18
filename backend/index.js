const express = require('express')
const User = require('./db/User')
const Product = require('./db/Product')
require('./db/config')
const cors = require('cors')
const app = express();

app.use(express.json())

app.use(cors())


//------------------for signup-------------------------------------------

app.post('/register', async (request , response)=>{
    let user = new User(request.body)
    let result = await user.save()
    result = result.toObject()// convert data to object
    delete result.password // this is allow to hide the password
    response.send(result)
})



//------------------for login---------------------------------------------

app.post('/login',async (request , response)=>{
    if(request.body.password && request.body.email){ //this is the condition where user have to enter both mail and password at a same time
        let user = await User.findOne(request.body).select("-password") //in this we are requesting the data
        if(user){
            response.send(user)
        }else{
            response.send({"result":"no data found"}) // if data is wrong this msg will display
        }
    }else{
        response.send({"result":"no data found"}) // if data is wrong this msg will display
    }
})

//---------------------for add-Product-----------------------------------------

app.post('/add-product' , async (request,response)=>{
    let product = new Product(request.body)
    let result = await product.save()
    response.send(result)
})

//----------------------to show product----------------------------------------

app.get('/products',async (request,response)=>{
    let products = await Product.find()
    if(products.length > 0){
        response.send(products)
    }else{
        response.send({result : "No products found"})
    }
})

//-------------------to deleteProduct-----------------------------------------

app.delete('/product/:id' , async (request, response)=>{
    let result = await Product.deleteOne({_id : request.params.id})
    console.warn(result)
    let products = await Product.find()
    response.send(products)
})



app.listen(5000)