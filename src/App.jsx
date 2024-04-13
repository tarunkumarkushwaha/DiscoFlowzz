import Navbar from './component/Navbar'
import SideBar from './component/SideBar'
import { useState } from 'react';
import './App.css'

function App() {
  const [sidebar, setsidebar] = useState(false);
  const [query, setQuery] = useState('')

  const toggleNav = function () {
    setsidebar(!sidebar)
  }

  return (
    <>
      <Navbar query={query} setQuery={setQuery} toggleNav={toggleNav} />
      <SideBar sidebar={sidebar} toggleNav={toggleNav} />
    </>
  )
}

export default App
