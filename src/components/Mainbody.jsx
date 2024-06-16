import mainImageDesktop from "../assets/images/image-web-3-desktop.jpg"
import mainImageMobile from "../assets/images/image-web-3-mobile.jpg"



export function Mainbody() {
  return (
    <>
    <div className="md:w-[80svw]">
    <img className="md:hidden" src={mainImageMobile} alt="colorfull lego pieces"/>

    <img className="max-md:hidden" src={mainImageDesktop} alt="colorfull lego pieces"/>

    <div className="mt-6 mb-9 md:grid grid-cols-2 gap-x-6">

    <h1 className="text-[1.5rem] font-extrabold mr-20">The Bright Future of Web 3.0?</h1>
    <div>
    <p className="text-myblue-700 text-[0.78rem] pr-1 font-medium mb-10"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
    But is it really fulfilling its promise?</p>

    <h2 className="text-[0.7rem] font-bold bg-myred-400 py-2 px-3 w-[8rem] text-center mt-4 transition ease-out delay-150 hover:bg-myblue-900 hover:text-white hover:translate-y-1 duration-500">
      <a href="#">READ MORE</a>
      </h2>
    </div>
    

    </div>
    </div>
    
    

    </>
    
    
      
    
    
    
  )
}

