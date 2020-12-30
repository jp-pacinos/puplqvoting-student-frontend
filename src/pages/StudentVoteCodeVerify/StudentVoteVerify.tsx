import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Button, Spacer, Input } from 'components/Core'

import { Response, sendCode } from 'api/voting'
import { useSelector, selectUser, useDispatch, makeVoteCompleted } from 'store'
import { Label } from 'components/Core'

interface Props {}

const StudentVoteVerify: React.FC<Props> = () => {
  const user = useSelector(selectUser)
  const location = useLocation<Response.Success.storeUserVote>()
  const history = useHistory()

  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const dispatch = useDispatch()

  const handleCodeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setErrorMessage('')

    try {
      let response = await sendCode({ code, historyId: location.state.history_id })
      dispatch(makeVoteCompleted())
      history.push('/vote/completed', response.data)
      return
    } catch (e: any) {
      let errMessage = 'Something went wrong. Please refresh the page and try again.'

      if (e.response) {
        let status = e.response.status
        let allowed = status === 401 || status === 403 || status === 429

        if (allowed) {
          errMessage = e.response.data.message
        }
      }

      setErrorMessage(errMessage)
    }

    setLoading(false)
  }

  let firstname = user.firstname ? user.firstname : 'Hello'
  let resultLink = location && location.state ? location.state.resultLink : ''

  return (
    <>
      <h2>{firstname}, almost there...</h2>
      <p>
        Your vote has been saved but it requires to be validated by our system in order to
        be counted. Please enter your <b>verification code</b> to proceed.
      </p>

      <Spacer level={2} />

      <form onSubmit={handleCodeSubmit}>
        <div>
          <Label>
            Enter the confirmation code <span style={{ color: 'red' }}>*</span>
          </Label>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            name="confirmation_code"
            placeholder="Confirmation code"
            autoFocus
            required
          />
        </div>

        {errorMessage ? (
          <p style={{ color: 'red', margin: 0, marginBottom: '0.8em' }}>{errorMessage}</p>
        ) : (
          <Spacer level={1} />
        )}

        <Button type="submit" color="primary" size="md" disabled={loading}>
          {loading ? 'Please wait...' : 'Continue'}
        </Button>
      </form>

      <Spacer level={5} />

      {resultLink.length !== 0 && (
        <p>
          If you have <b>problem on entering</b> your code. You can download your{' '}
          <a href={resultLink} target="_blank" rel="noopener noreferrer">
            vote results here for manual counting.
          </a>
        </p>
      )}
    </>
  )
}

export default StudentVoteVerify
