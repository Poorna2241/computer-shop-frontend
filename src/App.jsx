import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header />

      <ProductCard name="laptop" price="$1000" description="A high-performance laptop" img="https://picsum.photos/200/300?grayscale" />
      <ProductCard name="phone" price="$500" description="A smartphone with great features" img="https://picsum.photos/seed/picsum/200/300" />
      <ProductCard name="tablet" price="$300" description="A lightweight tablet" img="https://picsum.photos/id/870/200/300?grayscale&blur=2" /> */}

      <div className="w-[600px] h-[600px] border bg-gray-400"> 
        <div className="w-[500px] h-[500px] border bg-yellow-100 flex flex-col justify-center items-center"> 
          <div className="w-[100px] h-[100px] border bg-blue-600"> </div>
          <div className="w-[100px] h-[100px] border bg-green-600"> </div>
           <div className="w-[100px] h-[100px] border bg-red-600"> </div>
            <div className="w-[100px] h-[100px] border bg-yellow-600"> </div>
          
        </div>    
      </div>
    </>
  )
}

export default App
