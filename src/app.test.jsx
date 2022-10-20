import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Given a Napptilus App', () => {
  test('renders rights App', () => {
    render(<App />)
    const text = screen.getByText(/Loading.../i)
    expect(text).toBeInTheDocument()
  })
  test('Should show a list of products from the api', async () => {
    await act(async () => {
      render(<App />)
    })
    const text = screen.getByText(/Look at our products/i)
    expect(text).toBeInTheDocument()
  })
})
