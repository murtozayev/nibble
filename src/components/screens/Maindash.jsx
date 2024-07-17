import { db, restoraunt } from "../../data/db"
import Card from "../elements/Card"
import Card2 from "../elements/Card2"
import { useMap } from "../hook/customHook"
import target from "../../assets/Cards/Location.png"
import star from "../../assets/Star.png"
import foodIcon from "../../assets/Silverware.png"
import Products from "../elements/Products"

const Maindash = () => {
    return (
        <div className=" phone:px-[2vw] phone:w-[80vw] phone:h-[78vh] px-[20px] tablet:h-[90vh] laptop:w-[53vw] laptop:h-[88.5vh] laptop:px-[1vw] overflow-auto ">
            <h1 className=" text-[24px] phone:text-[4vw] phone:mt-[2vw] laptop:text-[1.3vw] laptop:mt-[1vh] font-bold mt-[20px] ">Food Categories</h1>
            <div className=" tablet:w-[80vw] tablet:overflow-x-auto phone:overflow-x-auto ">
                <div className=" flex laptop:mt-[3vh] tablet:w-[120vw] phone:w-[170vw] justify-between phone:mt-[3vw] mt-[30px] ">
                    {useMap(db, (item, index) => (
                        <Card
                            key={index}
                            title={item.categoryname}
                            image={item.icon}
                            option={item.items.length}
                        />
                    ))}
                </div>
            </div>

            <h1 className=" phone:text-[4.4vw] phone:mt-[4vw] text-[32px] tablet:text-[4vw] laptop:text-[1.5vw] font-bold mt-[30px] ">Featured restaurants</h1>

            <div className=" overflow-x-auto tablet:w-[80vw] ">

                <div className=" mt-[40px] phone:mt-[5vw] laptop:mt-[2.4vw] laptop:px-[0.6vw] laptop:w-[120vw] w-[2300px] phone:w-[360vw] overflow-x-auto flex-wrap justify-between px-[20px] flex ">
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

            <h1 className=" text-[32px] phone:text-[5vw] phone:mt-[4vw] tablet:text-[] laptop:text-[1.5vw] laptop:mt-[2vh] font-bold mt-[30px] ">Foods</h1>


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

export default Maindash