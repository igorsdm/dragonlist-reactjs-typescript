import { Switch } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { List } from '../pages/List'
import { DragonInfo } from '../pages/Dragon'
import { AddEdit } from '../pages/AddEdit'

import Route from './Route'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/lista" component={List} isPrivate />
    <Route path="/dragao" component={DragonInfo} isPrivate />
    <Route path="/novo" component={AddEdit} isPrivate />
    <Route path="/editar" component={AddEdit} isPrivate />
    <Route component={SignIn} />
  </Switch>
)

export default Routes
