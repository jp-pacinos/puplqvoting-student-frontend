import React, { useState, FormEvent, useCallback } from 'react'

import { Auth } from 'api'
import { useDispatch, setToken, setUserFirstName } from 'store'
import { Button, Input, Spacer, Label } from 'components/Core'
import Required from './components/Required'
import './StudentAuth.css'

const StudentAuth: React.FC<{}> = () => {
  const [form, setForm] = useState({
    student_number: '',
    firstname: '',
    lastname: '',
    birthdate: '',
  })
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value

    setForm((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setErrorMessage('')

    try {
      const response = await Auth.login({ user: form })

      dispatch(setToken(response.data.token))
      dispatch(setUserFirstName(form.firstname))

      // to stop the reading of the code below
      return
    } catch (e) {
      let errMessage = 'Something went wrong. Please refresh the page and try again.'

      if (e.response) {
        let status = e.response.status
        let allowed = status === 401 || status === 403

        if (allowed) {
          errMessage = e.response.data.message
        }
      }

      setErrorMessage(errMessage)
    }

    setLoading(false)
  }

  return (
    <>
      <h2>Student Authentication</h2>
      <p>Please enter your student information to procced.</p>

      <Spacer level={1} />

      <div id="auth_form">
        <form onSubmit={handleFormSubmit} method="post" autoComplete="off">
          <div>
            <Label>
              Student Number <Required />
            </Label>
            <Input
              type="text"
              name="student_number"
              placeholder="Enter your student number"
              required
              value={form.student_number}
              onChange={handleFormChange}
              autoFocus
            />
          </div>
          <div>
            <Label>
              First name <Required />
            </Label>
            <Input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              required
              value={form.firstname}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <Label>
              Last name <Required />
            </Label>
            <Input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              required
              value={form.lastname}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <Label>
              Birthday <Required />
            </Label>
            <Input
              type="date"
              name="birthdate"
              required
              value={form.birthdate}
              onChange={handleFormChange}
            />
          </div>

          {!loading && errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <Spacer level={2} />

          <Button type="submit" color="primary" size="lg" disabled={loading}>
            {loading ? 'Please wait...' : 'Procced'}
          </Button>
        </form>
      </div>
    </>
  )
}

export default StudentAuth
