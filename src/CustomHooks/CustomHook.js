 import React, { useState,useEffect } from "react";

 export const useTheme =()=>{
    const [theme,setTheme]=useState("light");
    
    const onThemeChangeHandler = () =>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    }
   
    return {
        theme,
        onThemeChangeHandler
    }
 }

// Custom hook to fetch data very useful
 export const useFetch = (url,filter) =>{
    const [data,setData] = useState([]);

    const FetchData = async () =>{
       const res = await fetch(`${url}/${filter}`);
       const data = await res.json();
       console.log(data);
       setData(filter === "products"? data.products : data.users);
    }

    useEffect(()=>{
        setData([]);
        FetchData();

    },[url,filter]);

    return{
        data
    }
 }
  