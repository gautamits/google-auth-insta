import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

test('login page renders', () => {
    render(<App/>)
    expect(screen.queryByText('Login')).toBeInTheDocument();
})