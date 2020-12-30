import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'setupTests'

import Input from './Input'

describe('Input', () => {
  it('has placeholder to display', () => {
    const { container } = render(<Input placeholder="Example input" />)
    const input = container.firstChild as HTMLInputElement
    expect(input.placeholder).toBe('Example input')
  })

  it('can type on it', async () => {
    let firstValue = ''
    let secondValue = 'My value'
    let thirdValue = 'My example value'

    const handleChange = jest.fn()

    const { container } = render(<Input onChange={handleChange} />)
    const input = container.firstChild as HTMLInputElement

    expect(input.value).toBe(firstValue)

    await userEvent.type(input, secondValue)
    expect(handleChange).toBeCalledTimes(secondValue.length)
    expect(input.value).toBe(secondValue)

    await userEvent.clear(input) // + 1 call
    await userEvent.type(input, thirdValue)
    expect(handleChange).toBeCalledTimes(
      secondValue.length + thirdValue.length + 1
    )
    expect(input.value).toBe(thirdValue)
  })
})
