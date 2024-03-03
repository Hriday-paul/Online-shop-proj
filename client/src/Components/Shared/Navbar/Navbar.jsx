import { IoMdMail, IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { CiLogin, CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder, MdCompare, MdOutlinePhoneInTalk } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            {/* contact bar */}
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto px-4 md:px-0 py-5">
                    <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center">
                        <div className="flex gap-x-2 items-center">
                            <div className="flex gap-x-1 items-center border-r border-r-gray-400 px-2 md:px-3 font-medium">
                                <MdOutlinePhoneInTalk className="text-orange-500 text-lg"></MdOutlinePhoneInTalk>
                                <p className="text-sm font-sans">+060 (800) 801-582</p>
                            </div>
                            <div className="flex items-center gap-x-2 px-2 md:px-3 text-sm">
                                <IoMdMail className="text-orange-500 text-lg font-sans"></IoMdMail>
                                <p>support@feriowala.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="border-r border-r-gray-400 pr-2 text-sm">
                                <Link to='/' className="flex items-center gap-x-1 hover:text-orange-400 duration-300">
                                    <FaLocationDot className="text-orange-500 text-lg"></FaLocationDot>
                                    <p className="text-sm md:text-base font-serif">Location</p>
                                </Link>
                            </div>
                            <div className="flex items-center border-r-gray-400 text-sm">
                                <div className="border-r border-r-gray-400 px-1 md:px-2 text-sm">
                                    <Link to='/profile' className="flex gap-x-1 items-center hover:text-orange-400 duration-300">
                                        <FcBusinessman className="text-orange-500 text-lg"></FcBusinessman>
                                        <p className="text-sm md:text-base font-serif">My account</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center border-r border-r-gray-400  text-sm">
                                <div className="border-r-gray-400 px-1 md:px-2 text-sm">
                                    <Link to='/login' className="flex gap-x-1 items-center hover:text-orange-400 duration-300">
                                        <IoMdLogIn className="text-orange-500 text-lg"></IoMdLogIn>
                                        <p className="text-sm md:text-base font-serif">Login</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center border-r border-r-gray-400 text-sm">
                                <div className="px-1 md:px-2 text-sm">
                                    <Link to='/register' className="flex gap-x-1 items-center hover:text-orange-400 duration-300">
                                        <CiLogin className="text-orange-500 text-lg"></CiLogin>
                                        <p className="text-sm md:text-base font-serif">Register</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* logo & search field */}
            <div className="max-w-7xl mx-auto">
                <div className="container mx-auto px-4 md:px-0 py-0 md:py-8">
                    <div className="hidden md:grid grid-cols-3 items-center">
                        <Link to='/'>
                            <div className="flex flex-row items-center">
                                <img src="https://i.ibb.co/Ld6BLNW/logo-eshop-removebg-preview.png" height={50} width={50} alt="logo" />
                                <h1 className="text-2xl text-bold font-medium text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-600  text-center uppercase">
                                    Feriowala
                                </h1>
                            </div>
                        </Link>

                        <div>
                            <div className="relative max-w-sm mx-auto">
                                <input type="text" className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-orange-600" placeholder="search..." />
                                <button className="absolute duration-300 group inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-orange-600 ">
                                    <CiSearch className="text-orange-500 group-hover:text-white text-2xl"></CiSearch>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end items-center">
                            <div className="relative group flex items-center justify-center md:mr-5 lg:mr-8">
                                <Link to='/'>
                                    <MdOutlineFavoriteBorder className="text-orange-500 text-3xl"></MdOutlineFavoriteBorder>
                                </Link>
                            </div>
                            <div className="relative group flex items-center justify-center md:mr-5 lg:mr-8">
                                <Link to='/' >
                                    <MdCompare className="text-orange-500 text-3xl"></MdCompare>
                                </Link>
                            </div>
                            <div className="relative group flex items-center justify-center mr-3">
                                <Link to='/' >
                                    <BsCartCheck className="text-orange-500 text-3xl"></BsCartCheck>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* navbar */}
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-4 justify-between items-center">
                        <div className="col-span-1 bg-orange-400">
                            <Link to='/category/all' className="flex items-center justify-between gap-x-2 px-5 py-3 md:py-5 bg-orange-400 duration-300 text-white">
                                <h1 className="text-base md:text-xl font-medium font-serif">See All</h1>
                                <RiMenu3Fill className="text-white hidden md:block text-lg"></RiMenu3Fill>
                            </Link>
                        </div>

                        <div className="hidden md:inline md:col-span-3">
                            <ul className="flex gap-x-10 justify-center items-center font-serif">
                                <li>
                                    <Link to='/' className="block py-5 pl-3 text-white pr-4 border-b-2 border-orange-400 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer font-serif">Home</Link>
                                </li>
                                <li className="lg:hidden">
                                    <Link ></Link>
                                </li>
                                <li>
                                    <Link to='/mycart' className="block py-5 pl-3 text-white pr-4 border-b-2 border-orange-400 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer">My Cart</Link>
                                </li>
                                <li>
                                    <Link to='/contact' className="block py-5 pl-3 text-white pr-4 border-b-2 border-orange-400 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="md:hidden flex justify-end col-span-3">
                            <IoMdMenu className="text-white text-2xl"></IoMdMenu>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;