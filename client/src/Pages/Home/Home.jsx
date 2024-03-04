import { Link } from "react-router-dom";
import HomeSlider from "../../Components/Ui/HomeSlider/HomeSlider";
import { FcSmartphoneTablet } from "react-icons/fc";

const Home = () => {
    return (
        <div className="bg-gray-200 pb-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="col-span-3">
                        <div className="lg:flex flex-col hidden">
                            <Link to='/category/Smart phone' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Smart Phone</span>
                            </Link>
                            <Link to='/category/Laptop' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Laptop</span>
                            </Link>
                            <Link to='/category/Desktop' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Desktop</span>
                            </Link>
                            <Link to='/category/Watch' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Watch</span>
                            </Link>
                            <Link to='/category/T-Shirt' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>T-Shirt</span>
                            </Link>
                            <Link to='/category/Bag' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Bag</span>
                            </Link>
                            <Link to='/category/Gift' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Gift</span>
                            </Link>
                            <Link to='/category/Cosmetics' className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Cosmetics</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <HomeSlider />
                    </div>
                </div>

                <div className="my-6 md:my-10">
                    <div className="bg-gradient-to-r from-sky-400 to-blue-300">
                        <h3 className="bg-orange-400 p-4 pr-6 inline-block rounded-tr-full text-white font-bold text-xs md:text-lg lg:text-xl">FEATURED CATEGORY</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-6 md:my-10">
                        <Link to='/category/Smart phone' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <FcSmartphoneTablet className="text-[112px] group-hover:scale-110 duration-200"></FcSmartphoneTablet>
                            <p className="text-xl md:text-2xl font-bold font-mono">Smart Phone</p>
                            </div>
                        </Link>
                        <Link to='/category/Laptop' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/0fXSxhY/428001.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">Laptop</p>
                            </div>
                        </Link>
                        <Link to='/category/Desktop' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/jwrCmdK/desktop-icon.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">Desktop</p>
                            </div>
                        </Link>
                        <Link to='/category/Watch' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/bB7YHHd/watch.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">Watch</p>
                            </div>
                        </Link>
                        <Link to='/category/T-Shirt' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/KjqY1rH/420tshirt-100521.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">T-Shirt</p>
                            </div>
                        </Link>
                        <Link to='/category/Bag' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/qjrdpxD/bag.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">Bag</p>
                            </div>
                        </Link>
                        <Link to='/category/Gift' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/sVhyXhs/gift.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">Gift</p>
                            </div>
                        </Link>
                        <Link to='/category/Cosmetics' className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src='https://i.ibb.co/Sn9fWBj/3194619.png' className="h-28 md:h-32 group-hover:scale-110 duration-200" alt="category icon" />
                            <p className="text-xl md:text-2xl font-bold font-mono">Cosmetics</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;