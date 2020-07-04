import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from '../Pages/Home'
import CreatPoint from '../Pages/CreatePoint'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={CreatPoint} path='/create-point' />
    </BrowserRouter>
  )
}

export default Routes