
import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app.jsx'
import store from './main/store.jsx'
import {Provider} from 'react-redux'


import './style.css'


ReactDOM.render(

<Provider store={store} >
<App/>
</Provider>

, document.getElementById('app'))