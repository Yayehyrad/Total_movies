import { ReactElement, useEffect } from 'react'
 
import { Outlet } from 'react-router-dom'
import Header from './components/Nav/Header'
import Footer from './components/Footer/Footer'
import MobileNavigation from './components/Nav/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData , setImageURL } from './store/movieSlice'
 

function App() : ReactElement {
  const dispatch = useDispatch()
  const fetchTrendingData = async()=>{
    try {
        const response = await axios.get('/trending/all/week')
        dispatch(setBannerData(response.data.results))
    } catch (error) {
        console.log("error",error)
    }
  }
  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")

        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch (error) {
      
    }
  }

  useEffect(() => {   
  fetchTrendingData()
  fetchConfiguration()
  }, [])
  

  return (
    <main>
      <Header/>
       <div className=' h-[100vh]'>
        <Outlet />
       </div>    
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}

export default App
