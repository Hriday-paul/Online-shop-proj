import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import { filteringContext } from "../../ContextHandler/FilterContext/FilterContext";
import SingleProduct from "../../Components/shared/SingleProduct/SingleProduct";
import LoadingProduct from "../../Components/shared/LoadingProduct/LoadingProduct";

const Products = () => {
    const { filterList, getCategoryWiseProducts, setFilterList, loading, productDatas, getDataLength, dataLength } = useContext(filteringContext);
    const { categoryName } = useParams();
    const limit = 9
    const [pagenumber, setPagenumber] = useState(1);

    const onChangePage = (pageNum) => {
        setPagenumber(pageNum);
    };

    useEffect(()=>{
        getDataLength({...filterList, category: categoryName});
    }, [categoryName, filterList])


    useEffect(() => {
        setPagenumber(1);
        setFilterList({rating: 0, stock: false, limit: 9});

        setFilterList({ rating: 0, stock: false, limit: 9 , category: categoryName, activePage: pagenumber })
        getCategoryWiseProducts({ rating: 0, stock: false, limit: 9 , category: categoryName, activePage: pagenumber });
    }, [categoryName]);

    useEffect(()=>{
        getCategoryWiseProducts({ ...filterList, category: categoryName, activePage: pagenumber });
    }, [pagenumber])



    return (
        <>
            {
                loading ? <LoadingProduct></LoadingProduct> :
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:m-5 gap-x-3 gap-y-5 md:gap-5">
                            {
                                productDatas?.map((prod)=>{
                                    return <SingleProduct key={prod.id} product={prod}></SingleProduct>
                                })
                            }
                        </div>

                        <div className="mx-auto flex justify-center py-10 ">
                            <Pagination defaultCurrent={1} current={pagenumber} onChange={onChangePage} pageSize={limit} total={dataLength} />
                        </div>
                    </div>
            }
        </>
    );
};

export default Products;