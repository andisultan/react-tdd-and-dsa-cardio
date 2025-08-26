import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest';
import App from './App'

describe('App Component', () => {
  it('renders the title and initial count', () => {
    render(<App />)
    // Check title
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
    // Check initial count
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })

  it('increments the count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
  })

  it('has links to Vite and React docs', () => {
    render(<App />)
    const viteLink = screen.getByRole('link', { name: /Vite logo/i })
    const reactLink = screen.getByRole('link', { name: /React logo/i })

    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
  })
})
