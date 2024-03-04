import { NavLink, Outlet } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const Category = () => {
    const [collapse, setCollapse] = useState({
        categoryColapse: false,
    });

    return (
        <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="col-span-3 my-3 bg-white px-3 option-list font-serif">
                        <span className="flex flex-row justify-between items-center px-2 py-4 cursor-pointer">
                            <h4 className="text-lg font-serif text-gray-600">Filter</h4>
                            <IoFilter className="text-lg text-black"></IoFilter>
                        </span>

                        <div className="mb-2 duration-200 lg:h-auto w-auto h-0 overflow-hidden">
                            <span onClick={() => setCollapse({ ...collapse, categoryColapse: !collapse.categoryColapse })} className="flex flex-row justify-between items-center p-2 cursor-pointer">
                                <h4 className="text-base font-serif text-gray-600">Category</h4>
                                <RiArrowDropDownLine className="text-2xl"></RiArrowDropDownLine>
                            </span>
                            <div className={`border-b mb-2 duration-200 ${collapse.categoryColapse ? 'h-0 overflow-hidden' : 'h-auto'}`}>
                                <div className="flex flex-col my-2">
                                    <NavLink to='/category/Smart phone' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>
                                            Smart Phone
                                        </span>
                                    </NavLink>
                                    <NavLink to='/category/Laptop' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>
                                            Laptop
                                        </span>
                                    </NavLink>
                                    <NavLink to='/category/Desktop' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>Desktop</span>
                                    </NavLink>
                                    <NavLink to='/category/Watch' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>Watch</span>
                                    </NavLink>
                                    <NavLink to='/category/T-Shirt' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>T-Shirt</span>
                                    </NavLink>
                                    <NavLink to='/category/Bag' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>Bag</span>
                                    </NavLink>
                                    <NavLink to='/category/Gift' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>Gift</span>
                                    </NavLink>
                                    <NavLink to='/category/Cosmetics' className={({ isActive }) => isActive ? "duration-200 p-2 bg-orange-400 text-white" : "duration-200 hover:text-white p-2 hover:bg-orange-400"}>
                                        <span>Cosmetics</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Category;