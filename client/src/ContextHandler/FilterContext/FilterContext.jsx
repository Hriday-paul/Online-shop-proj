import { createContext, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import toast from "react-hot-toast";

export const filteringContext = createContext(null);

const FilterContext = ({ children }) => {
    const axiosPublic = UseAxiosPublic();
    const [filterList, setFilterList] = useState(
        {
            rating: 0,
            stock: false,
            limit: 9,
        }
    );
    const [dataLength, setDataLength] = useState(0);
    const [productDatas, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartProduct, setCartProduct] = useState([]);


    const getCategoryWiseProducts = (filterData) => {
        axiosPublic.post('/products', filterData)
            .then(({ data }) => {
                setProducts(data);
                setLoading(false);
            })
    }

    const getDataLength = (filterData) => {
        axiosPublic.post('/length', filterData)
            .then(({ data }) => {
                setDataLength(data.length);
            })
    }

    // added cart product
    const addCart = (product) => {
        
        axiosPublic.put('/addCart', product)
            .then(() => {
                toast.success('Added cart successfully.');
                getCartProduct(product?.email);
            })
    }

    // cart delete
    const deletecart = async (id, email) => {
        const loadingToastId = toast.loading('Deletion pending....');
        try {
            const { data } = await axiosPublic.delete(`/deleteCart/${id}`)
            if (data?.deletedCount >= 1) {
                getCartProduct(email);
                toast.success('Delete successfully', { id: loadingToastId });
            }
            else {
                toast.error('Deletion failed, try again', { id: loadingToastId });
            }

        } catch (err) {
            toast.error('Deletion failed, try again', { id: loadingToastId });
        }
    }

    // get my added cart product 
    const getCartProduct = (email) => {
        axiosPublic.get(`/getCarts/${email}`)
            .then(({ data }) => {
                setCartProduct(data);
            })
    }


    const contextList = {
        filterList,
        setFilterList,
        productDatas,
        getCategoryWiseProducts,
        loading,
        setLoading,
        getDataLength,
        dataLength,
        getCartProduct,
        cartProduct,
        addCart,
        deletecart
    }



    return (
        <filteringContext.Provider value={contextList}>
            {children}
        </filteringContext.Provider>
    );
};

export default FilterContext;