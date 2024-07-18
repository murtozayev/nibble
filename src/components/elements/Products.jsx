const Products = ({ image, title, price, star, rate }) => {
    return (
        <div className=" w-[326px] phone:w-[70vw] phone:h-[80vw] laptop:w-[15vw] tablet:w-[40vw] laptop:h-[15vw] laptop:rounded-[1vh] laptop:pb-[2vw] rounded-[20px] shadow-2xl pb-[40px] laptop:p-[0.2vw] p-[5px] ">
            <img src={image} className=" phone:h-[40vw] laptop:rounded-t-[1vh] laptop:h-[18vh] rounded-t-[20px] w-[346px] h-[176px] " alt="Image" />
            <div className=" laptop:px-[1vh] laptop:mt-[2vh] flex justify-between px-[10px] mt-[20px] ">
                <h1 className=" text-[16px] laptop:text-[0.8vw] font-bold ">{title}</h1>
                <span className=" text-[20px] laptop:text-[1vw] font-bold text-[blue] ">{price}$</span>
            </div>
            <div className=" flex justify-between mt-[20px] laptop:px-[1vh] laptop:mt-[1.5vh] px-[20px] ">
                <div className=" flex items-center laptop:gap-[1vh] gap-[10px] ">
                    <img className=" w-[30px] laptop:w-[1.5vw] " src={star} alt="Star" />
                    <span className=" text-[20px] laptop:text-[2vh] font-bold ">{rate}</span>
                </div>
                <button className=" text-[25px] phone:text-[5vw] laptop:text-[1.5vw] fa-regular fa-heart " />
            </div>
        </div>
    )
}

export default Products