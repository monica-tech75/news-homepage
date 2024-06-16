

import { Header } from './components/Header'
import { Mainbody } from './components/Mainbody'
import { Articles } from './components/Articles'
import { News } from './components/News'

function App() {
  

  return (
    <>  
    <div className="bg-mywhite-400 mx-3 md:mx-[5svw] font-mysans text-myblue-900">

    <Header />
    
    <div className='md:flex md:gap-6'>
    <Mainbody />
    <Articles />
    </div>
    
    <News />
    </div>

   
    
    
     
    </>
  )
}

export default App
