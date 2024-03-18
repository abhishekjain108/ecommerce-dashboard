import React, { useState } from 'react'

const AddProduct = () => {

    let[name , setName] = useState('')
    let[price , setPrice] = useState('')
    let[category , setCategory] = useState('')
    let[company , setCompany] = useState('')
    let[errormsg , SetErrormsg] = useState(false)

    function handleName(e){
        setName(e.target.value)
    }
    function handlePrice(e){
        setPrice(e.target.value)
    }
    function handleCategory(e){
        setCategory(e.target.value)
    }
    function handleCompany(e){
        setCompany(e.target.value)
    }

   async function handleClick(){
        if(!name || !price || !category || !company){

            SetErrormsg(true)
            return(false)
        }
        let userId =JSON.parse( localStorage.getItem('user'))._id
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name , price , category , company , userId}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        result = await result.json()
        // console.warn(result)

        setName('')
        setPrice('')
        setCategory('')
        setCompany('')
 

    }
    return (
        <>
            <div className="container">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name*</span>
                <input type="text" value={name} onChange={handleName} className="form-control " placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {errormsg && !name && <div className="error-show">Enter valid name</div>}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Price*</span>
                <input type="text" value={price} onChange={handlePrice} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {errormsg && !price && <div className="error-show">Enter valid price</div>}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Category*</span>
                <input type="text" value={category} onChange={handleCategory} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {errormsg && !category && <div className="error-show">Enter valid category</div>}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Company*</span>
                <input type="text" value={company} onChange={handleCompany} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            {errormsg && !company && <div className="error-show">Enter valid company</div>}
            <div className="input-group mb-3">
               <button onClick={handleClick} className='btn btn-success'>Add Product</button>
            </div>
            </div>
        </>
    )
}

export default AddProduct