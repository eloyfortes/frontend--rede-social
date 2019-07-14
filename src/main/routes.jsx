import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AuthVerify from '../auth/AuthVerify.jsx'
import Main from '../pages/main/main.jsx'
import Users from '../pages/users/users.jsx'
import CadUser from '../pages/cadUser/cadUser.jsx'

export default props => (
    <BrowserRouter>
<Switch>
<Route  path="/" component={AuthVerify} />

<Route base path="/users/:name" component={Users}/>
<Route path="/cadastro" component={CadUser}/>

</Switch>   
</BrowserRouter>

    
)

