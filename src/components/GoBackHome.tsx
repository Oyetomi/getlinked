import {NavLink} from "react-router-dom";
import {IoArrowBackCircleSharp} from "react-icons/io5"

const GoBackHome = () => {
    return (
        <div className='font-ClashDisplay justify-center text-4xl text-fuchsia-500 mb-10'>
            <div className="flex animate-bounce">
                <span><NavLink to="/"><IoArrowBackCircleSharp/></NavLink></span>
                <span className="text-2xl">Home</span>
            </div>
        </div>
    )
}

export default GoBackHome