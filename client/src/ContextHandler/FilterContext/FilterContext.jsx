import { createContext, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

export const filteringContext = createContext(null);

const FilterContext = ({children}) => {
    const [filterList, setFilterList] = useState({
        minPrice : 0,
        maxPrice : 20000,
        rating : 0,
        isStock : false
    })
    const [products, setProducts] = useState([]);
    const axiosPublic = UseAxiosPublic();
    const [loading, setLoading] = useState(false);


    const getCategoryWiseProducts = (filterData)=>{
        axiosPublic.post('/products', filterData);
    }


    const contextList = {
        filterList,
        products,
        getCategoryWiseProducts
    }



    return (
        <filteringContext.Provider value={contextList}>
            {children}
        </filteringContext.Provider>
    );
};

export default FilterContext;