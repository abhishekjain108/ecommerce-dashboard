import React, { useEffect, useState } from 'react'



const ProductList = () => {

  const [products, setProducts] = useState([])
  const [deleteProducts, setDeleteProducts] = useState(false)

  useEffect(() => {
    getProducts()
  }, [deleteProducts])

 const getProducts = async () => {
    let result = await fetch('http://127.0.0.1:5000/products')
    result = await result.json()
    setProducts(result)
  }

  async function deleteProduct(id){
    await fetch(`http://127.0.0.1:5000/product/${id}`, {
      method:'Delete'
    })
    .then((res) => res.json())
    .then((data) => {
      setProducts(data)})
    // console.log(result)
    // result = await result.json()

    // if(result){
    //   //  setProducts(result)
    //    getProducts();
    // }
  };
  return (
    <>
      <div className="container">
      <table className="table table-striped table-bordered table-hover">
        <thead className='table-dark'> 
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">category</th>
            <th scope="col">company</th>
            <th scope="col" colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
        
            {
              products.map((items , index)=>{
                return <> 
                <tr key={items._id}>
                <th >{index+1}</th>
                <td>{items.name}</td>
                <td>${items.price}</td>
                <td>{items.category}</td>
                <td>{items.company}</td>
                <td ><button onClick={()=>deleteProduct(items._id)} className='btn btn-danger btn-sm'>Delete</button></td>
                </tr>
                </>
              })
            }
    
        </tbody>
      </table>
      </div>
    </>
  )
}

export default ProductList