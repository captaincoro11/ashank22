import { Body } from "./Components/Body"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import "./index.css"

function App() {


  return (
    <>
    <div className="bg-amber-50 min-h-screen px-10 py-3 flex flex-col gap-16 md:py-10 px-10 justify-between lg:">
      <Header/>
      <Body/>
      <div></div>
      <Footer/>
    </div> 
    
    </>
    
  )
}

export default App
