import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Product from './components/Product'
import ProductRQ from './components/ProductRQ'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='container'>

      
      <Product/>
      <ProductRQ/>
      </div>
    </QueryClientProvider>
  )
}

export default App
