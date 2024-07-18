import target from "../../assets/Cards/Location.png"
import star from "../../assets/Star.png"
import foodIcon from "../../assets/Silverware.png"
import Card2 from '../elements/Card2'
import { db, restoraunt } from '../../data/db'
import { useMap } from '../hook/customHook'
import Products from "../elements/Products"

const Explore = () => {
  return (
    <div className=" h-[950px] laptop:h-[89vh] phone:overflow-y-auto phone:h-[78vh] laptop:w-[55vw] overflow-y-auto ">
      <h1 className=' laptop:text-[1.5vw] text-[24px] phone:text-[5vw] font-bold '>Restaurants nearby</h1>
      <div className=" tablet:overflow-x-auto phone:overflow-x-auto phone:w-[80vw] tablet:w-[85vw] ">
        <div className=" tablet:w-[300vw] phone:w-[350vw] flex flex-wrap justify-between ">
          {useMap(restoraunt, (item, index) => (
            <Card2
              key={index}
              resImage={item.icon}
              title={item.name}
              away={item.away}
              type={item.type}
              rate={item.rate}
              target={target}
              star={star}
              iconFood={foodIcon}
            />
          ))}
        </div>
      </div>
      <h1 className=" text-[28px] phone:text-[5vw] font-bold mt-[30px] laptop:text-[1.5vw] ">Popular orders</h1>
      <div className=" mt-[30px] phone:mt-[3vw] laptop:mt-[3vh] flex laptop:gap-[1vw] flex-wrap gap-[20px] laptop:h-[20vw] justify-around h-[410px] ">
        {useMap(db[0].items, ((item, index) => {
          return (
            <Products
              key={index}
              image={item.image}
              title={item.name}
              star={star}
              price={item.price}
              rate={item.rate}
            />
          )
        }))}
      </div>
    </div>
  )
}

export default Explore