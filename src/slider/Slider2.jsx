
import { Link } from 'react-router-dom';

const Slider2 = () => {
    return (
        <div className=" bg-[#F2F6F7]  max-h-[600px] min-h-[600px]">
      <div className="lg:flex md:flex  justify-between items-center">
        <div className="lg:px-24 md:px-4 p-8 ">
          <h1 className="lg:text-4xl md:text-xl font-bold">
            Find Your Dream <br /> House By Us
          </h1>
          <div className="border-l-4 border-r-0 border-t-0 border-b-0 border-solid mb-8 border-[#FF5A3D]">
            <p className=" ml-4 ">
              Discover your perfect home with us! Lets match you with the house
              <br /> of your dreams. Your ideal home awaits here
            </p>
          </div>
          <Link
            to={"/register"}
            className="relative lg:px-5 md:px-2 px-5 py-3 overflow-hidden font-bold no-underline  text-white bg-[#FF5A3D] border border-gray-100 rounded-sm shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-200 delay-200 text-sm   group-hover:text-white ease">
              Register Now
            </span>
          </Link>
        </div>

        <div className="w-1/2 ">
          <img  src="/src/assets/img/undraw_for_sale_re_egkk.svg"  alt="" />
        </div>
      </div>
    </div>
    );
};

export default Slider2;