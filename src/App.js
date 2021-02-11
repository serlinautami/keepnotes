import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { 
  Home,
  Login,
  Register,
  NotFound404
} from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route path="*" exact component={NotFound404}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;