import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import products from '../../mocks/products.json'
import App from '../../App'

describe('Given a product list page', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch')
  })

  test('Should show a list of products from the api', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => products
    })
    await act(async () => {
      render(<App />)
    })
    expect(window.fetch).toHaveBeenCalled()
    for (const product of products) {
      expect(await screen.findByText(product.model)).toBeInTheDocument()
    }
  })
})
