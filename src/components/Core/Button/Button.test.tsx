import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'setupTests'

import Button from './Button'

describe('Button', () => {
  it('render the button', () => {
    const { container } = render(<Button>My Button</Button>)
    const button = container.firstChild as Element

    expect(button.textContent).toBe('My Button')
  })

  it('render the button with a ReactNode children', () => {
    const { container } = render(
      <Button>
        <p>My Button</p>
      </Button>
    )
    const button = container.firstChild

    expect(button).toContainHTML('<p>My Button</p>')
  })

  it('can be clicked', () => {
    const handleClick = jest.fn()

    const { container } = render(
      <Button onClick={handleClick}>My Button</Button>
    )
    const button = container.firstChild as Element

    userEvent.click(button)

    expect(handleClick).toBeCalledTimes(1)
  })
})
