import logo from "../../assets/Light.png"
import user from "../../assets/user.png"
import message from "../../assets/message.png"
import key from "../../assets/key.png"
import Button from "../elements/Button"

const Signup = () => {
    return (
        <div className=" tablet:flex-col phone:flex-col phone:w-[100vw] tablet:w-[100vw] flex items-center justify-center ">
            <div className=" phone:w-[100vw] phone:h-[30vh] flex tablet:h-[30vh] tablet:w-[100vw] laptop:w-[30%] laptop:h-[100vh] rounded-r-[20px] justify-center items-center w-[576px] h-[1024px] " id="image">
                <img src={logo} alt="Logo" className=" phone:w-[20vh] laptop:w-[20vh] " />
            </div>
            <form className=" phone:w-[100vw] phone:h-[auto] phone:p-[3vh] w-[864px] tablet:w-[100vw] tablet:p-[4vh] tablet:h-[auto] h-[1024px] laptop:w-[50%] laptop:p-[12vh] laptop:h-[100vh] flex flex-col p-[170px] ">
                <h1 className=" text-[32px] laptop:text-[4vh] phone:text-[3vh]  font-bold ">Create an account</h1>
                <span className="  text-[20px] laptop:text-[2vh] phone:text-[2vh] opacity-60 ">Plese create an account to continue using our service</span>
                <div className=" flex mt-[50px] phone:mt-[2.5vh] tablet:mt-[4vh] laptop:mt-[4vh] items-center gap-[30px] ">
                    <img src={user} className=" laptop:w-[7vh] phone:w-[7vh] " alt="User" />
                    <label className=" flex flex-col font-semibold ">
                        <span className=" uppercase laptop:text-[1.5vh] text-[12px] ">Full Name</span>
                        <input type="text" className=" laptop:w-[30vw] phone:w-[70vw] laptop:text-[2vh] w-[488px] h-[32px] outline-none border-b py-[7px] " placeholder="Mark Clarke" />
                    </label>
                </div>
                <div className=" flex mt-[50px] phone:mt-[2.5vh] tablet:mt-[4vh] laptop:mt-[4vh] items-center gap-[30px] ">
                    <img src={message} className=" laptop:w-[7vh] phone:w-[7vh] " alt="User" />
                    <label className=" flex flex-col font-semibold ">
                        <span className=" uppercase laptop:text-[1.5vh] text-[12px] ">Email Name</span>
                        <input type="email" className=" laptop:text-[2vh] w-[488px] h-[32px] outline-none laptop:w-[30vw] phone:w-[70vw] border-b py-[7px] " placeholder="markclarke@gmail.com" />
                    </label>
                </div>
                <div className=" flex mt-[50px] phone:mt-[2.5vh] tablet:mt-[4vh] laptop:mt-[4vh] items-center gap-[30px] ">
                    <img src={key} className=" laptop:w-[7vh] phone:w-[7vh] " alt="User" />
                    <label className=" flex flex-col font-semibold ">
                        <span className=" uppercase laptop:text-[1.5vh] text-[12px] ">Password</span>
                        <input type="password" className=" laptop:text-[2vh] w-[488px] h-[32px] outline-none laptop:w-[30vw] phone:w-[70vw] border-b py-[7px] " placeholder="**********" />
                    </label>
                </div>
                <Button className=" phone:h-[7vh] phone:w-[92vw] phone:text-[2.4vh] laptop:w-[35vw] tablet:w-[90vw] laptop:h-[10vh] laptop:text-[2.3vh] laptop:flex justify-center items-center w-[576px] rounded-[15px] h-[64px] text-[20px] text-[white] font-semibold  mt-[50px] phone:mt-[2.5vh] tablet:mt-[4vh] laptop:mt-[4vh] ">Create an account</Button>
                <div className=" mt-[50px] tablet:mt-[4vh] phone:mt-[2vh] phone:text-[2vh] laptop:text-[2vh] laptop:mt-[4vh] text-center  font-semibold ">
                    <span>Already have an account? </span>
                    <a className=" text-[red] " href="">Sign In</a>
                </div>
            </form>
        </div>
    )
}

export default Signup