import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

export interface GuardRouteProps<P = any>
  extends Omit<RouteProps, 'component' | 'render'> {
  component: React.ElementType<P>
  guard: boolean
  guestRedirectTo?: string
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const GuardRoute: React.FC<GuardRouteProps> = ({
  component: Component,
  guard: condition,
  guestRedirectTo: redirectPath = '/',
  ...rest
}) => {
  return (
    <Route
      render={(props) =>
        condition ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: redirectPath }} />
        )
      }
      {...rest}
    />
  )
}

export default GuardRoute
