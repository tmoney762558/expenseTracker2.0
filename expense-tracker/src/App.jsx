import React from 'react'
import { Navbar, Dashboard } from './containers'

const App = () => {
  return (
    <div className='w-screen min-h-screen lg:px-siteX px-[1rem] bg-zinc-900'>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App