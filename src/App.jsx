import React, { Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { persistance } from './services/persistance'
import Header from './components/Header'
import './App.css'

const ProductList = React.lazy(() => import('./pages/ProductList'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'))

const Loading = () => <p>Loading ...</p>

const App = () => {
  const [productCount, setProductCount] = useState(persistance.get('productCount') ?? 0)

  return (
    <BrowserRouter>
      <Header productCount={productCount} />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <ProductList />
            </Suspense>
          }
        />
        <Route
          path='/product-detail/:productId'
          element={
            <Suspense fallback={<Loading />}>
              <ProductDetail setProductCount={setProductCount} />
            </Suspense>
          }
        />
        <Route path='*' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
