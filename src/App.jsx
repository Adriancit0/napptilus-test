import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'

const ProductList = React.lazy(() => import('./pages/ProductList'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'))

const Loading = () => <p>Loading ...</p>

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
              <ProductDetail />
            </Suspense>
          }
        />
        <Route path='*' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
