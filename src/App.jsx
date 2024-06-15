

import { Header } from './components/Header'
import { Mainbody } from './components/Mainbody'
import { Articles } from './components/Articles'
import { News } from './components/News'

function App() {
  

  return (
    <>  
    <div className="bg-mywhite-400 mx-3 sm:mx-10 font-mysans text-myblue-900">
    <Header />
    <Mainbody />
    <Articles />
    <News />
    </div>

   
    
    
     
    </>
  )
}

export default App
