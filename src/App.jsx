import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen font-[Poppins] flex flex-col">
      
      <Navbar/>

      <div className="flex-1">
        <Content/>
      </div>
      
      
      <Footer/>

    </div>
  )
}

export default App
