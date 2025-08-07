import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../apis/prodcts"

const ProductRQ = () => {
  const {data, status, error} = useQuery({
    queryKey:['products'],
    queryFn: getProducts
  })
  if (status === 'pending') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  console.log(data);
  return (
    <div>
      <h2>ProductRQ</h2>
      {data.products.map((i)=>{
        return <p key={i.id}>{i.title}</p>
      })}
    </div>
  )
}

export default ProductRQ