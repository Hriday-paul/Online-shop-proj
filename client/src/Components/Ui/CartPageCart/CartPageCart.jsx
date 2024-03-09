import { Link } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { MdDeleteOutline } from "react-icons/md";
import { useContext, useState } from "react";
import { filteringContext } from "../../../ContextHandler/FilterContext/FilterContext";
import { Toaster } from "react-hot-toast";
import { authContext } from "../../../ContextHandler/Authonicate/Authonicate";

const CartPageCart = ({product}) => {
    const [quantity, setQuantity] = useState(parseInt(product.quantity));
    const {addCart, deletecart} = useContext(filteringContext);
    const {userInfo} = useContext(authContext)

    const updateQuantity = (updatedData)=>{
        addCart({...updatedData, quantity : quantity});
    }

    const deleteCartProduct = (id)=>{
        deletecart(id, userInfo?.email)
    }

    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start items-center">
            <Link to={`/product/${product.category}/${product.id}`} >
                <img src={product.image} className="w-60 rounded-lg sm:w-40 mx-auto" alt="product-image" />
            </Link>
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0 flex flex-col items-center">
                    <Link to={`/product/${product.category}/${product.id}`} className="text-base lg:text-lg font-bold text-gray-900 block align-middle hover:text-orange-400 duration-200">
                        {product?.product_model}
                    </Link>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center border-gray-100">
                            <span onClick={()=>quantity>1 && setQuantity(quan=>quan-1)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-400 hover:text-blue-50">-</span>
                            <span className=" bg-white py-1 px-3 duration-100 border border-orange-500 text-sm">{quantity}</span>
                            <span onClick={()=> quantity<10 && setQuantity(quan=>quan+1)}  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-400 hover:text-blue-50">+</span>
                        </div>
                        <span onClick={()=>updateQuantity(product)} className="cursor-pointer rounded p-2 duration-100 bg-gray-100 text-blue-50 tooltip">
                            <TfiReload className="text-lg text-orange-500"></TfiReload>
                        </span>
                        
                    </div>

                    <div className="flex items-center space-x-4">
                        <p className="font-medium text-base">456</p>
                        <button onClick={()=>deleteCartProduct(product.id)} className="bg-gray-100 p-2 text-white rounded tooltip"><MdDeleteOutline className="text-xl text-orange-500"></MdDeleteOutline></button>
                    </div>

                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default CartPageCart;