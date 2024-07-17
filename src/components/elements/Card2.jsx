const Card2 = ({ resImage, title, star, rate, iconFood, type, target, away }) => {
    return (
        <div className=" flex items-center phone:gap-[3vw] gap-[20px] ">
            <img className=" laptop:w-[5vw] phone:w-[20vw] " src={resImage} alt="ResImage" />
            <div>
                <div className=" flex flex-col phone:gap-[1vw] laptop:gap-[0.4vw] gap-[5px] ">
                    <h2 className=" text-[16px] phone:text-[3vw] font-bold laptop:text-[1.8vh] ">{title}</h2>
                    <div className=" flex items-center phone:gap-[2vw] gap-[15px] laptop:gap-[1.5vh] ">
                        <img className=" laptop:w-[0.8vw] phone:w-[3vw] " src={star} alt="Star" />
                        <div className=" flex items-center ">
                            <strong className=" laptop:text-[0.9vw] phone:text-[2vw] ">{rate}</strong>
                            <span className=" laptop:text-[0.9vw] phone:text-[2vw] ">( 1,983 )</span>
                        </div>
                        <div className=" flex gap-[10px] laptop:gap-[0.4vw] items-center ">
                            <img src={iconFood} className=" phone:w-[3vw] laptop:w-[0.8vw] " alt="icon" />
                            <span className=" laptop:text-[1.8vh] phone:text-[3vw] ">{type}</span>
                        </div>
                    </div>
                    <div className=" flex phone:gap-[2vw] gap-[20px] ">
                        <button className=" laptop:px-[1.2vw] phone:p-[2vw] phone:px-[2vw] phone:py-[0.3vw] phone:text-[2vw] laptop:p-[1vh] laptop:text-[1.5vh] rounded-[5px] px-[20px] p-[5px] text-[#503E9D] font-semibold bg-[#503E9D1A] ">Free Delivery</button>
                        <div className=" laptop:gap-[1.3vh] phone:gap-[2vw] flex items-center gap-[10px] ">
                            <img className=" laptop:w-[2vh] phone:w-[3vw] " src={target} alt="Target" />
                            <span className=" laptop:text-[1.8vh] phone:text-[2vw] ">{away} km</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2