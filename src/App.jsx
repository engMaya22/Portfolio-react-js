import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {

  return (
         <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">

              <div className="flixed top-0 -z-10   h-full w-full  "></div>
              {/* the div under us from this website https://bg.ibelick.com/ */}
              <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>        
              <div className="container px-8 mx-auto">
                <Navbar />
                <Hero />
              </div>

         </div>
  )
}

export default App
