import GoBackHome from "./GoBackHome.tsx";

const PageNotFound  = () => {
    return (
        <div className='font-ClashDisplay justify-center text-fuchsia-500'>
            <GoBackHome/>
            <div className="animate-spin text-6xl font-ClashDisplay">404</div>
            <span className="block text-6xl">Page Not Found</span>
        </div>
    )
}

export default PageNotFound