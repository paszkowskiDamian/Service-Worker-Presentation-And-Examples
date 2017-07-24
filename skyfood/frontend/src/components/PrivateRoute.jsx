import React from 'react'
import { Route, Redirect } from 'react-router'

import { registry } from '../registry'

const auth = registry.get('auth')

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isLoggedIn() ? (
      <Component {...props} ></Component>
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)