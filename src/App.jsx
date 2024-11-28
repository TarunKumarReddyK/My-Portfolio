import Contact from "./Components/Contact"
import Details from "./Components/Details"
import Experience from "./Components/Experience"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Technologies from "./Components/Technologies"

const App = () => {
  return (
    <div>
<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
         <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Projects/>
        < Experience/>
        <Details/>
        <Contact/>
       </div>
    </div>
  )
}

export default App
