import { fullname } from 'utils/fullname'

it('show fullname', () => {
  const user = {
    firstname: 'Juan',
    lastname: 'Dela Cruz',
    middlename: 'Aww',
  }

  expect(fullname(user)).toBe('Juan A. Dela Cruz')
})

it('show fullname without middlename', () => {
  const user = {
    firstname: 'Juan',
    lastname: 'Dela Cruz',
    middlename: null,
  }

  expect(fullname(user)).toBe('Juan Dela Cruz')
})

it('show fullname with suffix', () => {
  const user = {
    firstname: 'Juan',
    lastname: 'Dela Cruz',
    middlename: 'Aww',
    suffix: 'Jr',
  }

  expect(fullname(user)).toBe('Juan A. Dela Cruz Jr')
})
