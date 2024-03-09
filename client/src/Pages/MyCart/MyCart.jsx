import { useContext } from "react";
import { Link } from "react-router-dom";
import { filteringContext } from "../../ContextHandler/FilterContext/FilterContext";
import CartPageCart from "../../Components/Ui/CartPageCart/CartPageCart";


const MyCart = () => {
    const { cartProduct } = useContext(filteringContext);

    const mainBalance = cartProduct?.reduce((total, item)=>{
        return total + (item.price + ((item.discount * 22) / 100)) * item.quantity;
    }, 0)

    const discount = cartProduct?.reduce((total, item)=>{
        return total + item.discount ;
    }, 0)

    const shipping = cartProduct?.reduce((total, item)=>{
        return total + item?.quantity == 1 ? item?.quantity*100 : item?.quantity*70 ;
    }, 0)
    


    return (
        <div className="bg-gray-100 py-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {
                        cartProduct.length > 0 ? cartProduct.map((cartP) => {
                            return <CartPageCart key={cartP.id} product={cartP}></CartPageCart>
                        }) :
                            <div className='min-h-80 flex flex-col items-center justify-center'>
                                <img className='h-40 w-40' src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png' />
                                <h3 className='text-xl font-nunito '>You have no cart</h3>
                            </div>
                    }

                </div>
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Main Balance</p>
                        <p className="text-gray-700">$ {Math.round(mainBalance)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">
                            Discount
                        </p>
                        <p className="text-gray-700">$ {Math.round(discount)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">
                            Shiping
                        </p>
                        <p className="text-gray-700">$ {shipping}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div>
                            <p className="mb-1 text-lg font-bold">$ {Math.round((mainBalance-discount)+shipping)}</p>
                            <p className="text-sm text-gray-700">Including VAT</p>
                        </div>
                    </div>
                    <Link to={`${cartProduct.length > 0 ? "/checkOut" : '/category/all' }`} className="mt-6 block text-center rounded-md bg-orange-400 py-2 px-5 font-medium text-blue-50 hover:bg-orange-500 duration-200">Check out</Link>
                </div>
            </div>
        </div>
    );
};

export default MyCart;