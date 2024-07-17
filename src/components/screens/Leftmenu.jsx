import logo from "../../assets/Dark.png"
import home from "../../assets/house.png"
import history from "../../assets/Home.png"
import bookmark from "../../assets/Bookmark.png"
import feed from "../../assets/Feed.png"
import settings from "../../assets/Settings.png"
import doc from "../../assets/Document.png"
import user from "../../image/Image.png"
import menu from "../../image/Menu.png"
import Chooseone from "../elements/Chooseone"

const Leftmenu = () => {
    return (
        <div className=" w-[304px] phone:w-[15vw] phone:items-center phone:rounded-[2vw] phone:h-[90vh] tablet:h-[100vh] tablet:w-[12vw] justify-between phone:py-[5vw] flex flex-col laptop:h-[100vh] bg-[#F7F7F7] rounded-r-[20px] p-[10px] py-[40px] ">
            <div>
                <img className=" phone:w-[10vw] tablet:w-[5vw] ml-[10px] laptop:ml-[0.2vw] laptop:w-[6vw] " src={logo} alt="Logo" />
                <div className=" flex laptop:mt-[4vh] laptop:gap-[0.5vw] flex-col mt-[30px] gap-[10px] ">
                    <Chooseone to="/" className=" flex w-[272px] phone:p-[2vw] phone:w-[8vw] phone:h-[8vw] tablet:w-[100%] h-[56px] laptop:h-[3vw]  laptop:w-[13vw] p-[15px] laptop:p-[1vw] rounded-[10px] laptop:rounded-[1vw] gap-[20px] laptop:gap-[1.1vw] items-center ">
                        <img src={home} className=" laptop:w-[1.4vw] phone:w-[4vw] " alt="Home" />
                        <span className=" tablet:hidden phone:hidden text-[16px] laptop:text-[0.9vw] font-semibold ">Home</span>
                    </Chooseone>
                    <Chooseone to="/explore" className=" flex w-[272px] phone:p-[2vw] phone:w-[8vw] phone:h-[8vw] tablet:w-[100%] h-[56px] laptop:h-[3vw]  laptop:w-[13vw] p-[15px] laptop:p-[1vw] rounded-[10px] laptop:rounded-[0.3vw] gap-[20px] laptop:gap-[1.1vw] items-center ">
                        <img className=" laptop:w-[1.4vw] phone:w-[4vw] drop-shadow-[0_0_2px_black] " src={feed} alt="Home" />
                        <span className=" tablet:hidden phone:hidden text-[16px] laptop:text-[0.9vw] font-semibold ">Explore</span>
                    </Chooseone>
                    <Chooseone to="/favourite" className=" flex w-[272px] phone:p-[2vw] phone:w-[8vw] phone:h-[8vw] tablet:w-[100%] h-[56px] laptop:h-[3vw]  laptop:w-[13vw] p-[15px] laptop:p-[1vw] rounded-[10px] laptop:rounded-[0.3vw] gap-[20px] laptop:gap-[1.1vw] items-center ">
                        <img src={bookmark} className=" laptop:w-[1.4vw] phone:w-[4vw] " alt="Home" />
                        <span className=" tablet:hidden phone:hidden text-[16px] laptop:text-[0.9vw] font-semibold ">Favourite</span>
                    </Chooseone>
                    <Chooseone to="/orders" className=" flex w-[272px] phone:p-[2vw] phone:w-[8vw] phone:h-[8vw] tablet:w-[100%] h-[56px] laptop:h-[3vw]  laptop:w-[13vw] p-[15px] laptop:p-[1vw] rounded-[10px] laptop:rounded-[0.3vw] gap-[20px] laptop:gap-[1.1vw] items-center ">
                        <img src={doc} className=" laptop:w-[1.4vw] phone:w-[4vw] " alt="Home" />
                        <span className=" tablet:hidden phone:hidden text-[16px] laptop:text-[0.9vw] font-semibold ">Orders</span>
                    </Chooseone>
                    <Chooseone to="/history" className=" flex w-[272px] phone:p-[2vw] phone:w-[8vw] phone:h-[8vw] tablet:w-[100%] h-[56px] laptop:h-[3vw]  laptop:w-[13vw] p-[15px] laptop:p-[1vw] rounded-[10px] laptop:rounded-[0.3vw] gap-[20px] laptop:gap-[1.1vw] items-center ">
                        <img className=" laptop:w-[1.4vw] phone:w-[4vw] " src={history} alt="Home" />
                        <span className="  tablet:hidden phone:hidden text-[16px] laptop:text-[0.9vw] font-semibold ">History</span>
                    </Chooseone>
                    <Chooseone to="/settings" className=" flex w-[272px] phone:p-[2vw] phone:w-[8vw] phone:h-[8vw] tablet:w-[100%] h-[56px] laptop:h-[3vw]  laptop:w-[13vw] p-[15px] laptop:p-[1vw] rounded-[10px] laptop:rounded-[0.3vw] gap-[20px] laptop:gap-[1.1vw] items-center ">
                        <img className=" laptop:w-[1.4vw] phone:w-[4vw] " src={settings} alt="Home" />
                        <span className=" tablet:hidden phone:hidden text-[16px] laptop:text-[0.9vw] font-semibold ">Settings</span>
                    </Chooseone>
                </div>
            </div>
            <div className=" flex justify-between items-center ">
                <img src={user} className=" laptop:w-[2.4vw] " alt="User" />
                <div className=" flex flex-col laptop:gap-[0.1vw] ">
                    <h2 className=" tablet:hidden phone:hidden text-[14px] font-bold laptop:text-[0.7vw] ">Mark Clarke</h2>
                    <span className=" tablet:hidden phone:hidden text-[12px] laptop:text-[0.6vw] ">markclarke@gmail.com</span>
                </div>
                <img className=" tablet:hidden phone:hidden laptop:w-[1vw] " src={menu} alt="Menu" />
            </div>
        </div>
    )
}

export default Leftmenu