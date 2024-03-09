import { NavLink, Outlet } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { Radio, Slider, Space } from "antd";
import { filteringContext } from "../../ContextHandler/FilterContext/FilterContext";

const Category = () => {
    const { filterList, getCategoryWiseProducts, setFilterList } = useContext(filteringContext);

    const [collapse, setCollapse] = useState({
        categoryColapse: false,
        ratingCollapse : false,
    });
    const sliderChange = (value) => {
        setFilterList({...filterList, price : value});
        getCategoryWiseProducts({...filterList, price : value});
    }
    const ratingChange = (e) => {
        setFilterList({...filterList, rating : e.target.value})
        getCategoryWiseProducts({...filterList, rating : e.target.value});
    };
    const stockChange = (e) => {
        // console.log(e.target.checked);
        setFilterList({...filterList, stock : e.target.checked})
        getCategoryWiseProducts({...filterList, stock : e.target.checked});
    }

    return (
        <div className="bg-gray-100">
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
                                <RiArrowDropDownLine className={`text-2xl duration-200 ${collapse?.categoryColapse ? 'rotate-180' : 'rotate-0'}`}></RiArrowDropDownLine>
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
                            <span className="flex flex-row justify-between items-center p-2">
                                <h4 className="text-base font-serif text-gray-600">
                                    Price
                                </h4>
                            </span>
                            <div className="p-2 border-b">
                                <Slider range defaultValue={[0, 200000]} onChangeComplete={sliderChange} min={0} max={200000} />

                            </div>

                            <span onClick={() => setCollapse({ ...collapse, ratingCollapse: !collapse.ratingCollapse })} className="flex flex-row justify-between items-center p-2 cursor-pointer">
                                <h4 className="text-base font-serif text-gray-600">
                                    Rating
                                </h4>
                                <RiArrowDropDownLine className={`text-2xl duration-200 ${collapse?.ratingCollapse ? 'rotate-180' : 'rotate-0'}`}></RiArrowDropDownLine>
                            </span>
                            <div className={`border-b mb-2 duration-200 ${collapse.ratingCollapse ? 'h-0 overflow-hidden' : 'h-auto'}`}>
                                <Radio.Group onChange={ratingChange} value={filterList?.rating}>
                                    <Space direction="vertical">
                                        <Radio value={1}>up to 1 Star</Radio>
                                        <Radio value={2}>up to 2 Star</Radio>
                                        <Radio value={3}>up to 3 Star</Radio>
                                        <Radio value={4}>up to 4 Star</Radio>
                                        <Radio value={5}>up to 5 Star</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>

                            <div className="pb-5">
                                <span className="flex flex-row justify-between items-center p-2">
                                    <h4 className="text-base font-serif text-gray-600">
                                        Only stock
                                    </h4>
                                </span>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input onChange={stockChange} type="checkbox" className="sr-only peer" />
                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900">Toggle me</span>
                                </label>
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