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
        <div className=" w-[304px] bg-[#F7F7F7] rounded-r-[20px] p-[10px] py-[40px] ">
            <img className=" ml-[10px] " src={logo} alt="Logo" />
            <div className=" flex flex-col mt-[30px] gap-[10px] ">
                <Chooseone to="/" className=" flex w-[272px] h-[56px] p-[15px] rounded-[10px] gap-[20px] items-center ">
                    <img src={home} alt="Home" />
                    <span className=" text-[16px] font-semibold ">Home</span>
                </Chooseone>
                <Chooseone to="/explore" className=" flex w-[272px] h-[56px] p-[15px] rounded-[10px] gap-[20px] items-center ">
                    <img className=" drop-shadow-[0_0_2px_black] " src={feed} alt="Home" />
                    <span className=" text-[16px] font-semibold ">Explore</span>
                </Chooseone>
                <Chooseone to="/favourite" className=" flex w-[272px] h-[56px] p-[15px] rounded-[10px] gap-[20px] items-center ">
                    <img src={bookmark} alt="Home" />
                    <span className=" text-[16px] font-semibold ">Favourite</span>
                </Chooseone>
                <Chooseone to="/orders" className=" flex w-[272px] h-[56px] p-[15px] rounded-[10px] gap-[20px] items-center ">
                    <img src={doc} alt="Home" />
                    <span className=" text-[16px] font-semibold ">Orders</span>
                </Chooseone>
                <Chooseone to="/history" className=" flex w-[272px] h-[56px] p-[15px] rounded-[10px] gap-[20px] items-center ">
                    <img src={history} alt="Home" />
                    <span className=" text-[16px] font-semibold ">History</span>
                </Chooseone>
                <Chooseone to="/settings" className=" flex w-[272px] h-[56px] p-[15px] rounded-[10px] gap-[20px] items-center ">
                    <img src={settings} alt="Home" />
                    <span className=" text-[16px] font-semibold ">Settings</span>
                </Chooseone>
            </div>
            <div className=" flex justify-between items-center mt-[500px] ">
                <img src={user} alt="User" />
                <div>
                    <h2 className=" text-[14px] font-bold ">Mark Clarke</h2>
                    <span className=" text-[12px] ">markclarke@gmail.com</span>
                </div>
                <img src={menu} alt="Menu" />
            </div>
        </div>
    )
}

export default Leftmenu