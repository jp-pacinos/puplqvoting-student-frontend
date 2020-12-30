import React from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import {
  selectAuthToken,
  selectIsUserVoted,
  selectIsVotingCompleted,
  useSelector,
} from 'store'
import {
  Home,
  StudentAuth,
  StudentVote,
  // VotingEnded,
  StudentVoteEmailVerify,
  StudentVoteCodeVerify,
  VotingCompleted,
  NotFound,
} from 'pages'

import { GuardRoute } from 'components'
import { apiClient } from 'api'

const Router: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <StudentAuthRoute path="/auth" exact />

      <StudentVerifyCodeRoute path="/vote/verify/code" exact />
      <StudentVerifyEmailRoute path="/vote/verify/email" exact />

      <StudentVoteCompletedRoute path="/vote/completed" exact />
      {/* <Route path="/vote/ended" component={VotingEnded} exact /> */}

      <StudentVotingRoute path="/vote" exact />

      <Route path="/404-not-found" component={NotFound} exact />
      <Redirect path="/*" to="/404-not-found" />
    </Switch>
  )
}

export default Router

/**
 * custom routes
 */
interface CustomRouteProps extends Omit<RouteProps, 'component' | 'render'> {}

const StudentAuthRoute: React.FC<CustomRouteProps> = (props) => {
  const token = useSelector(selectAuthToken)
  const haveToken = Boolean(token)

  if (haveToken) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return (
    <GuardRoute
      guard={!haveToken}
      guestRedirectTo="/vote"
      component={StudentAuth}
      {...props}
    />
  )
}

const StudentVotingRoute: React.FC<CustomRouteProps> = (props) => {
  const token = useSelector(selectAuthToken)
  const haveToken = Boolean(token)

  return (
    <GuardRoute
      guard={haveToken}
      guestRedirectTo="/auth"
      component={StudentVote}
      {...props}
    />
  )
}

/**
 * by email validation route
 */
const StudentVerifyEmailRoute: React.FC<CustomRouteProps> = (props) => {
  const token = useSelector(selectAuthToken)
  const isVoted = useSelector(selectIsUserVoted)

  const alreadyVoted = isVoted && Boolean(token)

  return (
    <GuardRoute
      guard={alreadyVoted}
      guestRedirectTo="/vote"
      component={StudentVoteEmailVerify}
      {...props}
    />
  )
}

/**
 * by code validation route
 */
const StudentVerifyCodeRoute: React.FC<CustomRouteProps> = (props) => {
  const token = useSelector(selectAuthToken)
  const isVoted = useSelector(selectIsUserVoted)

  const haveToken = Boolean(token)
  const alreadyVoted = isVoted && haveToken

  return (
    <GuardRoute
      guard={alreadyVoted}
      guestRedirectTo="/vote"
      component={StudentVoteCodeVerify}
      {...props}
    />
  )
}

/**
 * voting completed route
 */
const StudentVoteCompletedRoute: React.FC<CustomRouteProps> = (props) => {
  const isCompleted = useSelector(selectIsVotingCompleted)

  return (
    <GuardRoute
      guard={isCompleted}
      guestRedirectTo="/"
      component={VotingCompleted}
      {...props}
    />
  )
}
