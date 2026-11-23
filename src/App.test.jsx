import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('показывает заголовок', () => {
    render(<App />)
    expect(screen.getByText(/Несуществующий текст/i)).toBeInTheDocument()
})