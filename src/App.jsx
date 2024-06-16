

import { Header } from './components/Header'
import { Mainbody } from './components/Mainbody'
import { Articles } from './components/Articles'
import { News } from './components/News'

function App() {
  

  return (
    <>  
    <div className="bg-mywhite-400 mx-3 md:mx-20 font-mysans text-myblue-900">
    <Header />

    <div className='md:flex'>
    <div className='md:grid grid-cols-3 grid-rows-2'>
    <Mainbody />
    </div>
    <Articles />
    </div>
    
    
    <News />
    </div>

   
    
    
     
    </>
  )
}

export default App
