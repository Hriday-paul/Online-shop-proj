import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { filteringContext } from "../../../ContextHandler/FilterContext/FilterContext";
import { authContext } from "../../../ContextHandler/Authonicate/Authonicate";


const SingleCart = ({ Cproduct }) => {
    const { deletecart } = useContext(filteringContext);
    const { userInfo } = useContext(authContext);

    const deletecartPro = async (id) => {
        deletecart(id, userInfo?.email)
    }

    return (
        <div>
            <div className="flex flex-row justify-between gap-x-5 border-b py-5">
                <div className="flex flex-row gap-x-3">
                    <img className="h-28 w-28" src={Cproduct?.image} alt="toy image" />
                    <div>
                        <Link to={`/product/${Cproduct.category}/${Cproduct.id}`} className="text-base font-nunito font-medium hover:text-orange-500">{Cproduct?.product_model}</Link>
                        <h2 className="text-sm font-nunito font-medium my-1 text-orange-500">{Cproduct?.quantity} X {Cproduct?.price} /=</h2>
                    </div>
                </div>
                <div>
                    <div onClick={() => deletecartPro(Cproduct.id)} className="border border-orange-500 p-1 group rounded-full text-orange-500 cursor-pointer">
                        <RxCross2 className="text-base cursor-pointer group-hover:rotate-90 duration-500" ></RxCross2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;