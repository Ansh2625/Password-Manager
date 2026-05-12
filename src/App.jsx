import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'

function Layout(){
  return(
    <>
    
      <Navbar/>
      <Outlet/>
      <Footer/>

    </>
  )
}

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Content/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    }
  ])

  return (

    <>
    <div className='fixed inset-0 -z-10 bg-[#000000] bg-[radial-gradient(125%_125%_at_50%_100%,#000000_40%,#350136_100%)]'></div>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
