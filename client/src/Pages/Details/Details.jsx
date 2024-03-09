import { Image, Rate } from "antd";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BsCartCheck } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SwiperSlider from "../../Components/Ui/SwiperSlider/SwiperSlider";
import { filteringContext } from "../../ContextHandler/FilterContext/FilterContext";
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";

const Details = () => {
    const { userInfo } = useContext(authContext);
    const navig = useNavigate();
    const { addCart, cartProduct } = useContext(filteringContext);
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState({});
    const [relatedPRoducts, setRelatedProducts] = useState([]);
    const { id, categoryName } = useParams();
    const axiosPublic = UseAxiosPublic();

    const handleAddCart = (product) => {
        if (userInfo) {
            let addedProd = {};
            const findData = cartProduct.find((cartProd) => {
                return cartProd.id == product.id;
            })
            if (findData) {
                addedProd = { id: product.id, discount: product.discount, email: product.email, image: product.image, price: product.price, product_model: product.product_model, stock: product.stock, quantity: findData?.quantity+1 };
            } else {
                addedProd = { id: product.id, discount: product.discount, email: product.email, image: product.image, price: product.price, product_model: product.product_model, stock: product.stock, quantity: 1 };
            }
            addCart({ ...addedProd, email: userInfo?.email });
        } else {
            navig('/login')
        }
    }

    useEffect(() => {
        axiosPublic.get(`/details/${id}`)
            .then(({ data }) => {
                setDetails(data)
                setLoading(false);
            })
    }, [id]);

    useEffect(() => {
        axiosPublic.post(`products`, {
            category: categoryName,
            limit: 10,
            activePage: 1
        })
            .then(({ data }) => {
                setRelatedProducts(data);
            })
    }, []);

    return (
        <div className="bg-gray-100 ">
            {
                loading ?

                    <div className=" p-6 rounded-md shadow-md">
                        <div className="animate-pulse">
                            {/* Product Image Skeleton */}
                            <div className="w-64 lg:h-64 md:h-52 h-48 rounded-lg bg-gray-300 mb-4"></div>
                            {/* Product Title Skeleton */}
                            <div className="w-2/3 h-8 rounded-lg bg-gray-300 mb-4"></div>
                            {/* Product Description Skeleton */}
                            <div className="w-full h-16 rounded-lg bg-gray-300 mb-4"></div>
                        </div>
                    </div>

                    :

                    <div className="max-w-7xl mx-auto px-4">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-0 md:gap-x-5 py-10">
                            <div className="flex justify-center items-center lg:col-span-2">
                                <div>

                                    <Image
                                        width={350}
                                        src={details?.image}
                                    />

                                    <div className="w-32 md:w-40 mx-auto mt-5">
                                        <Rate disabled defaultValue={details?.rating} allowHalf />;
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-3 flex items-center">
                                <div className="w-full">
                                    <table className="table">
                                        <caption className="text-xl md:text-2xl lg:text-3xl font-medium  my-5">{details?.product_name}</caption>
                                        <tbody>

                                            <tr>
                                                <td className="text-lg font-medium ">Model</td>
                                                <td className="text-base font-medium "><span className="mr-5">:</span>{details?.product_model}</td>
                                            </tr>

                                            <tr>
                                                <td className="text-lg font-medium ">Brand</td>
                                                <td className="text-base font-medium "><span className="mr-5">:</span> {details?.brand}</td>
                                            </tr>
                                            {/* row 1 */}
                                            <tr>
                                                <td className="text-lg font-medium ">Category</td>
                                                <td className="text-base font-medium "><span className="mr-5">:</span> {details?.category}</td>
                                            </tr>

                                            <tr>
                                                <td className="text-lg font-medium ">Stock</td>
                                                <td className="text-base font-medium "><span className="mr-5">:</span> {details?.stock}</td>
                                            </tr>

                                            <tr>
                                                <td className="text-lg font-medium ">Discount</td>
                                                <td className="text-base font-medium "><span className="mr-5">:</span>{details?.discount} %</td>
                                            </tr>

                                            <tr className="bg-gray-500 rounded-lg text-white">
                                                <td className="text-lg font-medium">Price</td>
                                                <td className="text-base font-medium"><span className="mr-5">:</span> ${details?.price}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <button onClick={() => handleAddCart(details)} className="hover:border-white/40 w-full mt-8 hover:bg-blue-700 flex items-center justify-center rounded-md border border-transparent bg-blue-600 p-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-blue-300">
                                        <BsCartCheck className="text-lg font-bold mr-1"></BsCartCheck> Add to cart</button>
                                </div>

                            </div>
                        </div>
                        <div className="pb-10">
                            <div className="p-5 min-h-16 border-2">
                                <h3 className="text-lg font-bold text-orange-600 border-b-2 border-orange-600 inline pb-2">Description </h3>

                                <p className="p-5 text-justify text-gray-600">{details?.description}</p>
                            </div>
                        </div>

                        {/* //related product */}

                        {
                            relatedPRoducts.length > 0 &&
                            <div className="pb-10">
                                <div className="p-5 min-h-16 border-2">
                                    <h3 className="text-lg font-bold text-orange-600 border-b-2 border-orange-600 inline pb-2">Related Products </h3>

                                    <div className="mt-5">
                                        <SwiperSlider products={relatedPRoducts}></SwiperSlider>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
            }
            <Toaster></Toaster>

        </div>
    );
};

export default Details;