const About = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 items-center lg:flex-row gap-8 flex-col ">
        <div className="" data-aos="zoom-in"
                data-aos-duration="2000">
   
            <img className="w-full border-4 rounded-md border-solid border-gray-300"
              src="https://i.ibb.co/jr5sZ0k/istockphoto-1778738751-612x612.jpg"
              alt=""
            />

        </div>
        <div className="lg:w-1/2 w-full"   data-aos="fade-up"
        data-aos-duration="2000">
        <h1 className="text-4xl  font-bold" >Who We Are?</h1>
          <p className=" font-bold">about us</p>
          <p className="lg:leading-8">
          At Dream Dwellings, we're dedicated to helping you find the perfect home. Our team of experienced and knowledgeable real estate professionals is committed to providing personalized service and expert guidance throughout your home buying or selling journey. We pride ourselves on our integrity, market expertise, and passion for matching clients with homes that fit their needs and lifestyle. With a deep understanding of the local market and a commitment to client satisfaction, we work tirelessly to deliver exceptional results. Learn more about our story and how we can help you achieve your real estate goals.
          </p>
          <button
           
            className="relative px-5 py-3 overflow-hidden font-bold no-underline cursor-pointer text-white bg-[#FF5A3D] border border-gray-100 rounded-sm text-xl shadow-inner group"
            data-aos="zoom-in"
            data-aos-duration="1500"
         >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-200 delay-200   group-hover:text-white ease">
              Lern more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
