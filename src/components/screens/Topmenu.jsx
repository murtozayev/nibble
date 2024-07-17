import location from "../../assets/location.png"
import Option from "../../assets/Options.png"
import bag from "../../assets/Shopping-bag.png"
import Coupon from "../../assets/Coupon.png"
import Search from "../../assets/Search.png"
import bar from "../../assets/Filter.png"
import cart from "../../assets/Shopping-cart.png"
import Button from "../elements/Button"
import { useState } from "react"

const Topmenu = () => {

    const [isShow, setIsShow] = useState(false)

    const [search, setSearch] = useState(false)

    return (
        <nav className=" flex tablet:relative z-[100] items-center tablet:h-[8vh] tablet:w-[85vw] laptop:h-[7vh] justify-between laptop:px-[1vw] laptop:py-[2vw] px-[10px] py-[20px] ">

            {/* Phone responsive */}

            <button onClick={() => setIsShow(true)} className=" hidden phone:block w-[7vw] rounded-[1vw] fas text-white fa-bars text-[2.2vw] h-[7vw] bg-[#2222a2]  " />

            <div className={` top-0 bg-white py-[5vw] ${isShow ? "translate-y-0" : "translate-y-[-100%]"} hidden transition-all phone:block p-[3vw] absolute w-[86%] left-[14vw] z-[100] h-[90vh] `}>
                <button onClick={() => setIsShow(false)} className=" w-[7vw] h-[7vw] bg-[#24249e] rounded-[1vw] fas fa-xmark text-[white] " />

                <div className=" flex flex-col gap-[7vw] mt-[7vw] ">
                    <div className=" laptop:gap-[0.8vw] flex justify-between items-center gap-[15px] ">
                        <div className=" flex gap-[2vw] items-center ">
                            <img src={location} className=" tablet:w-[3.5vw] phone:w-[5vw] laptop:w-[1vw] " alt="Location" />
                            <h1 className=" font-bold phone:text-[3vw] ">Location</h1>
                        </div>
                        <div className=" flex items-center gap-[2vw] ">
                            <span className=" text-[14px] phone:text-[2.5vw] laptop:text-[0.6vw] text-[#182135] font-semibold ">San Francisco, California</span>
                            <img src={Option} className="tablet:w-[3vw]" alt="Option" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-[15px] justify-between laptop:gap-[0.8vw] ">
                        <div className=" flex items-center gap-[2vw] ">
                            <img src={bag} className=" laptop:w-[1vw] tablet:w-[3.5vw] phone:w-[5vw] " alt="Location" />
                            <h1 className=" font-bold phone:text-[3vw] ">Order type</h1>
                        </div>
                        <div className=" flex items-center gap-[2vw] ">
                            <span className=" text-[14px] phone:text-[2.5vw] laptop:text-[0.6vw] text-[#182135] font-semibold ">Pick up</span>
                            <img src={Option} className=" tablet:w-[3vw] " alt="Option" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-[15px] justify-between laptop:gap-[0.8vw] ">
                        <div className=" flex items-center gap-[2vw] ">
                            <img src={Coupon} className=" tablet:w-[3.5vw] phone:w-[5vw] laptop:w-[1vw] " alt="Location" />
                            <h1 className=" font-bold phone:text-[3vw] ">Discount</h1>
                        </div>
                        <div className=" flex items-center gap-[2vw] ">
                            <span className=" text-[14px] phone:text-[2.5vw] laptop:text-[0.6vw] text-[#182135] font-semibold ">Best deals</span>
                            <img src={Option} className=" tablet:w-[3vw] " alt="Option" />
                        </div>
                    </div>
                </div>
            </div>



            {/* Phone responsive */}

            {/* For responsive */}
            <div className={` hidden ${isShow ? "translate-x-0" : "translate-x-[-120%]"} transition tablet:flex z-[100] absolute top-0 h-[99vh] w-[90vw] backdrop-blur-[5px] `}>
                <div className=" flex flex-col gap-[4vw] p-[2vw] w-[70vw] h-[99vh] bg-white ">
                    <button onClick={() => setIsShow(false)} className=" fas fa-xmark text-[3vw] rounded-[1vw] text-[white] w-[7vw] h-[7vw] bg-[#3e1cbc] " />
                    <div className=" flex flex-col gap-[4vw] ">
                        <div className=" laptop:gap-[0.8vw] flex justify-between items-center gap-[15px] ">
                            <div className=" flex gap-[2vw] ">
                                <img src={location} className=" tablet:w-[3.5vw] laptop:w-[1vw] " alt="Location" />
                                <h1 className=" font-bold ">Location</h1>
                            </div>
                            <div className=" flex items-center gap-[2vw] ">
                                <span className=" text-[14px] laptop:text-[0.6vw] text-[#182135] font-semibold ">San Francisco, California</span>
                                <img src={Option} className="tablet:w-[3vw]" alt="Option" />
                            </div>
                        </div>
                        <div className=" flex items-center gap-[15px] justify-between laptop:gap-[0.8vw] ">
                            <div className=" flex items-center gap-[2vw] ">
                                <img src={bag} className=" laptop:w-[1vw] tablet:w-[3.5vw] " alt="Location" />
                                <h1 className=" font-bold ">Order type</h1>
                            </div>
                            <div className=" flex items-center gap-[2vw] ">
                                <span className=" text-[14px] laptop:text-[0.6vw] text-[#182135] font-semibold ">Pick up</span>
                                <img src={Option} className=" tablet:w-[3vw] " alt="Option" />
                            </div>
                        </div>
                        <div className=" flex items-center gap-[15px] justify-between laptop:gap-[0.8vw] ">
                            <div className=" flex items-center gap-[2vw] ">
                                <img src={Coupon} className=" tablet:w-[3.5vw] laptop:w-[1vw] " alt="Location" />
                                <h1 className=" font-bold ">Discount</h1>
                            </div>
                            <div className=" flex items-center gap-[2vw] ">
                                <span className=" text-[14px] laptop:text-[0.6vw] text-[#182135] font-semibold ">Best deals</span>
                                <img src={Option} className=" tablet:w-[3vw] " alt="Option" />
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => setIsShow(false)} className="  w-[30vw] h-[99vh] " />
            </div>
            {/* For responsive */}

            <button onClick={() => setIsShow(true)} className=" hidden tablet:block fa-solid fa-bars p-[2vw] text-[white] bg-[#503E9D] rounded-[0.7vw] " />
            <div className=" flex phone:hidden justify-between tablet:hidden ">
                <div className=" laptop:gap-[0.8vw] flex items-center gap-[15px] ">
                    <img src={location} className=" laptop:w-[1vw] " alt="Location" />
                    <span className=" text-[14px] laptop:text-[0.6vw] text-[#182135] font-semibold ">San Francisco, California</span>
                    <img src={Option} alt="Option" />
                </div>
                <div className=" flex items-center gap-[15px] laptop:gap-[0.8vw] ">
                    <img src={bag} className=" laptop:w-[1vw] " alt="Location" />
                    <span className=" text-[14px] laptop:text-[0.6vw] text-[#182135] font-semibold ">Pick up</span>
                    <img src={Option} alt="Option" />
                </div>
                <div className=" flex items-center gap-[15px] laptop:gap-[0.8vw] ">
                    <img src={Coupon} className=" laptop:w-[1vw] " alt="Location" />
                    <span className=" text-[14px] laptop:text-[0.6vw] text-[#182135] font-semibold ">Best deals</span>
                    <img src={Option} alt="Option" />
                </div>
            </div>



            <form className=" flex items-center ">
                <img src={Search} className=" relative phone:hidden phone:w-[4vw] phone:left-[22vw] laptop:left-[1.8vw] tablet:left-[30vw] laptop:w-[1vw] left-[35px] " alt="Search" />


                <img onClick={() => setSearch(true)} src={Search} className=" hidden relative phone:block phone:w-[4vw] phone:left-[22vw] " alt="Search" />

                <input className=" phone:hidden bg-[#F7F7F7] w-[388px] tablet:hidden laptop:w-[18vw] laptop:h-[2vw] laptop:px-[2.2vw] h-[48px] px-[50px] outline-none text-[14px] laptop:text-[0.6vw] p-[20px] rounded-[10px] " type="text" placeholder="Search for anything…" />

                {/* For phone Search panel */}

                <div className={` z-[100] hidden transition duration-500 phone:block ${search ? "scale-[1]" : "scale-0"} absolute p-[5vw] left-0 top-0 w-[100%] h-[90vh] bg-white `}>
                    <button type="button" onClick={() => setSearch(false)} className=" fas fa-arrow-left " />
                    <div className=" flex items-center ">
                        <input placeholder="Search foods" className=" px-[4vw] w-[100%] rounded-[2vw] mt-[2vw] font-semibold text-[3vw] outline-none h-[10vw] bg-[#F7F7F7] " type="text" />
                        <button className=" bg-[#6832dc] text-[4vw] w-[10vw] text-[white] rounded-[1vw] h-[10vw] fas fa-magnifying-glass " />
                    </div>
                </div>

                {/* For phone Search panel */}

            </form>
            <div className=" flex items-center laptop:gap-[1.1vw] gap-[10px] ">
                <Button className=" phone:hidden w-[48px] tablet:hidden h-[48px] laptop:w-[2.5vw] laptop:h-[2.5vw] flex laptop:rounded-[0.4vw] justify-center items-center rounded-[10px] ">
                    <img src={bar} className=" laptop:w-[1vw] " alt="Bar" />
                </Button>
                <button className=" phone:w-[8vw] phone:h-[8vw] phone:rounded-[1vw] w-[48px] h-[48px] flex bg-[#fb6d3a] justify-center laptop:w-[2.5vw] laptop:rounded-[0.4vw] laptop:h-[2.5vw] items-center rounded-[10px] ">
                    <img src={cart} className=" laptop:w-[1vw] phone:w-[3vw] " alt="Bar" />
                </button>
            </div>
        </nav>
    )
}

export default Topmenu