import { useEffect, useId, useState } from "react";

const Product = () => {
  const id = useId();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then((response)=>{
      if(!response.ok){
        return setError('Error while getting products');
      }
      return response.json();
    })
    .then((data)=>{
      setData(data.products);
    })
    .catch((e)=>{
      setError(e);
    })
    .finally(()=>{
      setLoading(false);
    })
  },[]);
  if(loading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>Error: {error}</h2>
  }
  return (
    <div>
      <h1>Products with Fetch</h1>
      
      {Array.isArray(data) && data.length >0 &&
      data.map((product)=>{
        return <h2 key={product.id}>{product?.title}</h2>
      })

      }
    </div>
  )
}

export default Product;