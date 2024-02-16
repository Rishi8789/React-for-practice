import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import axios from "axios";
import { getDataFailure, getDataRequest, getDataSuccess } from "../Redux/ProductReducer/action";

const Products = () => {
  const product = useSelector((store)=>store.productReducer.product);
  console.log(product);

  const loading = useSelector((store)=>store.productReducer.isLoading)
  console.log(loading); 
 

  const dispatch = useDispatch();

  const getData =async()=>{
    
    try{
       dispatch(getDataRequest())
      const res = await axios.get("http://localhost:8080/products");
      // const result= await res.data.json();
      dispatch(getDataSuccess(res.data))
       console.log(res);
    }
    catch(error){
      console.log(error);
      dispatch(getDataFailure())
    }
  }
 
  useEffect(()=>{
    getData();
  },[])
  
  return (
    <div>
    <h1>Product Page</h1>
    {/* <div>
      {product.map((item)=>{
        <img src={item.image}/>
      })}
    </div> */}
    
    </div>
  )
}

export default Products;