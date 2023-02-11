import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';


function ApiComp() {
  const [apiData,setApiData]=useState([]);

  const fetchData = async () => {
    // debugger;
    const res = await fetch('https://dummyjson.com/products')
        const data = await res.json();
        setApiData(data.products);
  }
  
  // cannot use async or return a promise from useEffect
  useEffect(() => {
    fetchData();
      
  }, [])
  
  console.log(apiData);
  return (
    <div>
 
     <div>
      <div className='fs-3'>ApiComp</div>
       <div className='mt-3 d-flex flex-wrap justify-content-around'>
        {apiData.length === 0 ? (
            <div className='d-flex'>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="brown" />
            <Spinner animation="grow" variant="dark" />
            </div>
        ):(
            apiData.map((product,index)=> (
                 <div className='my-3' key={index}>
                    <Card style={{ width: '18rem' , height:"30rem"}}>
                {/* //used chaining operator to perform a check before assigning data */}
                    <Card.Img variant="top" src={product?.thumbnail} height="180" />
                        <Card.Body>
                        <Card.Title>{product?.title +" "+ product?.brand}</Card.Title>
                        <Card.Text>
                            {product?.description.slice(0,20)+" ..."}
                        </Card.Text>
                        <Card.Text>
                            <b className='fs-5'>{product?.category}</b>
                        </Card.Text>
                        <Card.Text>
                            {product?.price}
                        </Card.Text>
                        <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>                
                </div>
            ))
        ) }    
    </div>
    </div>         
    </div>
)
}

export default ApiComp