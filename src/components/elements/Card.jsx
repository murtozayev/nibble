const Card = ({ image, title, option }) => {
    return (
        <div className=" gap-[5px] phone:w-[25vw] phone:rounded-[2vw] phone:h-[25vw] laptop:rounded-[1vh] laptop:gap-[0.3vh] laptop:w-[7.5vw]  laptop:h-[18vh] w-[152px] flex flex-col bg-[#F7F7F7] rounded-[20px] justify-center items-center h-[168px] ">
            <img className=" w-[48px] laptop:w-[3vw] phone:w-[7vw] " src={image} alt="Image" />
            <h1 className=" text-[16px] font-bold phone:text-[2vw] laptop:text-[1.6vh] ">{title}</h1>
            <span className=" text-[12px] font-semibold phone:text-[1.5vw] opacity-55 laptop:text-[1.2vh] ">{option} +options</span>
        </div>
    )
}

export default Card