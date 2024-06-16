import image01 from "../assets/images/image-retro-pcs.jpg"
import image02 from "../assets/images/image-top-laptops.jpg"
import image03 from "../assets/images/image-gaming-growth.jpg"


export const News = () => {
  return (
    <>
    <div className="flex mt-[3rem]">
      <img className="w-[35svw]" src={image01} alt="retro pc" />
      <div className="pl-3">
      <h2 className="text-myred-400 font-bold text-[1.5rem]">01</h2>
      <h3 className="font-bold">Reviving Retro PCs</h3>
      <p className="text-[0.9rem]">What happens when old PCs are given modern upgrades?</p>
      </div>
      
    </div>

    <div className="flex mt-[2rem]">
    <img className="w-[35svw]" src={image02} alt="keyboard" />
    <div className="pl-3">
      <h2 className="text-myred-400 font-bold text-[1.5rem]">02</h2>
      <h3 className="font-bold">Top 10 Laptops of 2022</h3>
      <p className="text-[0.9rem]">Our best picks for various needs and budgets.</p>
      </div>
    </div>

    <div className="flex mt-[2rem] pb-[4rem]">
    <img className="w-[35svw]" src={image03} alt="" />
    <div className="pl-3">
      <h2 className="text-myred-400 font-bold text-[1.5rem]">03</h2>
      <h3 className="font-bold">The Growth of Gaming</h3>
      <p className="text-[0.9rem]">How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>




    </>
  )
}
