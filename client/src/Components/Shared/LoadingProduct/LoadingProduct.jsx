import { Skeleton } from 'antd';

const SingleSkeleton = () => {
    return (
        <div className=" max-w-xs bg-gray-200 px-3 py-5 rounded-lg">
            <div className="mx-auto text-center my-2">
                <Skeleton.Image active={true} size='large' />
            </div>
            <Skeleton.Input active={true} size={'small'} block={true} className="mt-2" />
            <span className="flex flex-col justify-center mt-3">
                <Skeleton.Input className='text-center' active={true} size={'small'} />
            </span>
            <Skeleton.Input active={true} size={'large'} block={true} className="mt-2" />
        </div>
    )
}

const LoadingProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 m-5 justify-center items-center gap-x-0 gap-y-5 md:gap-5 ">

            {/* skeleton 1 */}

            <SingleSkeleton />
            <SingleSkeleton />
            <SingleSkeleton />
            <SingleSkeleton />

        </div>
    );
};

export default LoadingProduct;