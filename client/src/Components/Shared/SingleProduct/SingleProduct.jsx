import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Rate } from "antd";
import { MdOutlineFavoriteBorder, MdCompare } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

const SingleProduct = ({ product }) => {

    const handleAddFavourite = (product) => {
        console.log(product);
    }

    return (
        <div className="flex justify-center">
            <div className="group relative border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border shadow-md bg-white ">
                <div className="relative ">
                    <div className="border mx-3 md:mx-4 mt-3 md:mt-4 p-2 md:p-4 flex justify-center h-32 md:h-48 lg:h-48 overflow-hidden rounded-xl">
                        {/* <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product?.image} alt="toy image" />
                    <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={product?.image} alt="toy image" /> */}
                        <img src={product?.image} alt="product image" />

                    </div>
                    <span className="absolute -bottom-4 w-full left-0l border border-gray-100/30 flex justify-center ">
                        <Link to={`/product/${product?.category}/${product.id}`} className="bg-gray-100 p-2 rounded-full text-orange-500">
                            <IoEyeOutline></IoEyeOutline>
                        </Link>


                    </span>
                </div>



                <Link to={`/product/${product?.category}/${product.id}`} className="p-5 pt-7 text-center mx-auto z-10">
                    <h4 className="font-medium text-gray-700 text-sm md:text-base">{product?.product_model}</h4>

                    <Rate className="text-sm space-x-1 my-2 text-orange-400" disabled defaultValue={product?.rating} allowHalf />;

                    <div className="flex flex-row gap-x-1 items-center justify-center">
                        <h3 className="text-lg md:text-xl font-bold text-orange-600">${product?.price}</h3>
                        <sub className="text-sm font-medium text-gray-600 line-through">${product?.price}</sub>
                    </div>
                </Link>

                <div className="absolute top-3 -right-14 group-hover:right-3 duration-300 flex flex-col justify-between items-center transition-all p-3">
                    <span className="bg-gray-100 p-2 rounded-full">
                        <MdOutlineFavoriteBorder className="text-lg text-orange-500"></MdOutlineFavoriteBorder>
                    </span>
                </div>

                <div className="absolute top-12 -right-14 group-hover:right-3 duration-500 flex flex-col justify-between items-center transition-all p-3">
                    <span className="bg-gray-100 p-2 rounded-full mt-2">
                        <MdCompare className="text-lg text-orange-500"></MdCompare>
                    </span>
                </div>


                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default SingleProduct;


{/* <div className="mt-1 px-5 pb-5">
                    <Link to={`/product/${product?.category}/${product.id}`}>
                        <h5 className="text-base md:text-lg font-medium font-sans tracking-tight truncate">{product?.product_model}</h5>
                    </Link>
                    <div className="mb-3 flex items-center justify-between">
                        <p>
                            <span className="text-lg md:text-xl font-bold text-slate-900">${product?.price}</span>

                        </p>
                        <div>
                            <Rate className="text-[10px] md:text-sm space-x-1" disabled defaultValue={product?.rating} allowHalf />;
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <button onClick={() => handleAddCart(product)} className="hover:border-white/40 w-full hover:bg-[#00C4CC] flex items-center justify-center rounded-md border border-transparent bg-[#00C4CC] px-5 py-1.5 md:py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-[#00C4CC]">
                            Add to cart
                            <BsArrowRight className="ml-1"></BsArrowRight>
                        </button>
                    </div>
                </div>


                */}