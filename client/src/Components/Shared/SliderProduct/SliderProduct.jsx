import { Rate } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const SliderProduct = ({ product }) => {
    return (
        <div className="flex justify-center">
            <div className="group relative border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border shadow-md bg-white ">
                <div className="relative ">
                    <div className="border mx-3 md:mx-4 mt-3 md:mt-4 p-2 md:p-4 flex justify-center h-32 md:h-48 lg:h-48 overflow-hidden rounded-xl">
                      
                        <img className="h-32 lg:h-40 w-auto" loading="lazy" src={product?.image} alt="product image" />

                    </div>
                    <span className="absolute -bottom-4 w-full left-0l border border-gray-100/30 flex justify-center ">
                        <Link to={`/product/${product?.category}/${product.id}`} className="bg-gray-100 p-2 rounded-full text-orange-500">
                            <IoEyeOutline></IoEyeOutline>
                        </Link>


                    </span>
                </div>



                <Link to={`/product/${product?.category}/${product.id}`} className="p-5 pt-7 z-10">
                    <h4 className="font-medium text-gray-700 text-sm md:text-base">{product?.product_model}</h4>



                    <div className="flex flex-row gap-x-1 items-center justify-between">
                        <h3 className="text-sm md:text-xl font-bold text-orange-600">${product?.price}</h3>
                        <div className="text-right">
                            <Rate className="text-[8px] md:text-sm space-x-1 my-2 text-orange-400" disabled defaultValue={product?.rating} allowHalf />;
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SliderProduct;