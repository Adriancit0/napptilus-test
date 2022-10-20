import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './index'

describe('Given a header component', () => {
  test('Should show Napptilus link', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    })

    const linkElement = screen.getByText(/Napptilus/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('Should show cart icon', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    })

    const cartIcon = screen.getByTestId('cart__icon')
    expect(cartIcon).toBeInTheDocument()
  })
})
