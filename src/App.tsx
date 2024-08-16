import { ReactElement } from 'react'
 
import { Outlet } from 'react-router-dom'
import Header from './components/Nav/Header'
import Footer from './components/Footer/Footer'
import MobileNavigation from './components/Nav/MobileNavigation'

function App() : ReactElement {
  

  return (
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}

export default App
