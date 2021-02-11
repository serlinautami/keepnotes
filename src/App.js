import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
  Home,
  Login,
  Register,
  Dashboard,
  ManageUser,
  ManageTodo,
  NotFound404
} from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todo" exact component={ManageTodo}/>
        <Route path="/user" exact component={ManageUser}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route path="*" exact component={NotFound404}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;