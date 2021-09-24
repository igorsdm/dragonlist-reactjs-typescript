import { Switch } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { List } from '../pages/List'

import Route from './Route'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/list" component={List} isPrivate />
    <Route component={SignIn} />
  </Switch>
)

export default Routes
