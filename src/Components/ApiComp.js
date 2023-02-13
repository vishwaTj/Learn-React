import React, { useState,useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Item from './Item';
import { useFetch } from '../CustomHooks/CustomHook';


function ApiComp() {
  const [filter,setFilter] = useState("products");  
  // const [apiData,setApiData]=useState([]);

  // const fetchData = async () => {
  //   // debugger;
  //   const res = await fetch(`https://dummyjson.com/${filter}`)
  //       const data = await res.json();
  //       setApiData(filter === "products" ? data.products : data.users);
  // }
  
  // // cannot use async or return a promise from useEffect
  // useEffect(() => {
  //   setApiData([]);
  //   fetchData();
      
  // }, [filter])
  
  // console.log(apiData);

  const {data} = useFetch('https://dummyjson.com',filter);


  return (
    <div>
       <div className='d-flex justify-content-center'>  
         <Button variant='secondary me-5' onClick={()=>setFilter("products")}>Products</Button>
         <Button variant='warning' onClick={()=>setFilter("users")}>Users</Button>
       </div>  
      <div className='fs-2'>ApiComp</div>
       <div className='mt-3 d-flex flex-wrap justify-content-around'>
        {data.length === 0 ? (
            <div className='d-flex justify-content-center'>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="brown" />
            <Spinner animation="grow" variant="dark" />
            </div>
        ):(
            data.map((elem,index)=> (
                 <div className='my-3' key={index}>
                    <Item elem={elem}/>                
                </div>
              ))
            )}    
        </div>       
    </div>
)
}

export default ApiComp;