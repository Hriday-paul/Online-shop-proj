import { useContext, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { filteringContext } from "../../ContextHandler/FilterContext/FilterContext";
import { authContext } from "../../ContextHandler/Authonicate/Authonicate";
import toast, { Toaster } from "react-hot-toast";

const CheckOut = () => {
    const { cartProduct, getCartProduct } = useContext(filteringContext);
    const { userInfo } = useContext(authContext);
    const [districtErr, setDistrictErr] = useState('');
    const axiosPublic = UseAxiosPublic();

    const handleOrder = async (e) => {
        e.preventDefault();
        const loadingToastId = toast.loading('Order pending....');
        try {
            const form = e.target;
            const fname = form.fname.value;
            const lname = form.lname.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const district = form.district.value;
            const location = form.location.value;

            if (district == 'Choose a district') {
                setDistrictErr('Choose valid district')
            } else {
                const ids = [];
                for (let item of cartProduct) {
                    for (let i = 0; i < item.quantity; i++) {
                        ids.push(item.id)
                    }
                }

                if (ids.length > 0) {
                    const {data} = await axiosPublic.post('/order', {
                        fullName: fname + ' ' + lname,
                        email,
                        phone,
                        district,
                        location,
                        productIds: ids
                    })
                    toast.success('Order successfully', { id: loadingToastId });
                    if(data){
                        axiosPublic.delete(`/deleteManyCart/${userInfo?.email}`)
                        .then(({data})=>{
                            if(data?.deletedCount > 0){
                                getCartProduct(userInfo?.email)
                            }
                        })
                    }
                }else{
                    toast.error('Your cart is empty, try again ):', { id: loadingToastId });
                }
            }
        }
        catch (err) {
            toast.error('Order failed, try again ):', { id: loadingToastId });
        }
    }

    return (
        <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-20 py-10 items-center">
                    <form onSubmit={handleOrder} className="col-span-2 order-2 lg:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5 gap-y-5">
                            <div>
                                <label htmlFor="fname" className="text-black text-base font-medium">First Name *</label>
                                <input type="text" name="fname" required id="fname" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-0 outline-0 rounded-md  focus:border-orange-400 focus:outline-none focus:ring" placeholder="First name..." defaultValue={userInfo?.displayName} />
                            </div>
                            <div>
                                <label htmlFor="lname" className="text-black text-base font-medium">Last Name (optional)</label>
                                <input type="text" name="lname" id="lname" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-0 outline-0 rounded-md  focus:border-orange-400 focus:outline-none focus:ring" placeholder="last name..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-black text-base font-medium">Email address *</label>
                                <input type="text" name="email" required id="email" defaultValue={userInfo?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-0 outline-0 rounded-md  focus:border-orange-400 focus:outline-none focus:ring" placeholder="Email..." />
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-black text-base font-medium">Phone *</label>
                                <input type="text" name="phone" required id="phone" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-0 outline-0 rounded-md  focus:border-orange-400 focus:outline-none focus:ring" placeholder="Phone..." />
                            </div>
                            <div>
                                <label htmlFor="district" className="text-black text-base font-medium">District*</label>
                                <select name="district" id="district" className="block cursor-pointer w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring " required>
                                    <option>Choose a district</option>
                                    <option value="Cumilla">Cumilla</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Dinajpur">Dinajpur</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                </select>
                                {
                                    districtErr && <p className="text-red-500 px-2">{districtErr}</p>
                                }
                            </div>
                            <div>
                                <label htmlFor="location" className="text-black text-base font-medium">Location *</label>
                                <input type="text" name="location" required id="location" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-0 outline-0 rounded-md  focus:border-orange-400 focus:outline-none focus:ring" placeholder="location..." />
                            </div>
                        </div>
                        <div>
                            <button type='submit' className="btn btn-primary w-full mt-8">Order Now</button>
                        </div>
                    </form>
                    <div className="col-span-1 order-1 lg:order-2">
                        <div className="bg-white p-5 mt-8 lg:mt-2 mb-5 rounded-md">
                            <h3 className="text-xl font-medium mb-5">
                                Coupon/Voucher
                            </h3>
                            <label htmlFor="cupon" className="text-black text-base font-medium">Enter your coupon here : </label>
                            <input type="text" id="cupon" name='cupon' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" required placeholder="coupon" />
                            <button className="btn btn-primary btn-sm w-full mt-3">Submit</button>
                        </div>
                        <div className="bg-white p-5 rounded-md">
                            <h4 className="text-lg font-medium">Shiping methods</h4>
                            <div className="mt-5 grid gap-6">
                                <div className="relative">

                                    <span className="border-indigo-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 bg-white"></span>
                                    <div className="peer-checked:border-2 peer-checked:border-indigo-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4">
                                        <img className="w-14 object-contain" src="	https://cdn-images-1.medium.com/max/732/1*5c8KOrF2CKKQCcY67sJDWA.jpeg" alt="img" />
                                        <div className="ml-5">
                                            <span className="mt-2 font-semibold">Cash On Delivery</span>
                                            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default CheckOut;