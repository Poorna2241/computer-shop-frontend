import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard name="laptop" price="$1000" description="A high-performance laptop" img="https://picsum.photos/200/300?grayscale" />
      <ProductCard name="phone" price="$500" description="A smartphone with great features" img="https://picsum.photos/seed/picsum/200/300" />
      <ProductCard name="tablet" price="$300" description="A lightweight tablet" img="https://picsum.photos/id/870/200/300?grayscale&blur=2" />
    </>
  )
}

export default App
