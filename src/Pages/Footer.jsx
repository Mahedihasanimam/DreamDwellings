import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="px-4  divide-y bg-[#181C2B] text-gray-100">
	<div className="max-w-[1440px] mx-auto pl-4">
	<div className="container  flex flex-col justify-between py-10  space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3 line-clamp-4">
			<a rel="noopener noreferrer"  className="flex justify-center space-x-3 lg:justify-start no-underline">
			<span className="lg:text-4xl text-xl font-bold text-white"><span className="text-[#FF5A3D]">D</span>reamDwellings</span>
			</a>
			<p className="opacity-70 ">DreamDwellings offers luxurious, modern homes <br />
			 that blend comfort, style, and innovation for <br />
			  discerning homeowners worldwide.</p>
			<div className="space-y-3">
				<div className="flex justify-start space-x-3 ">
	
					<FaFacebook className="hover:text-red-500 cursor-pointer" size={20} />
					<FaTwitter  className="hover:text-red-500 cursor-pointer" size={20}/>
					<FaLinkedin className="hover:text-red-500 cursor-pointer" size={20} />
				</div>
			</div>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50">Quick links</h3>
				<ul className="space-y-1 list-none">
					<li className="hover:text-red-500">
					<FaArrowRight className="mr-1 font-bold"/> <Link className="text-white no-underline opacity-70" to={'/'}>  Home</Link>
					</li>
					<li className="hover:text-red-500">
					<FaArrowRight className="mr-1"/> <Link className="text-white no-underline opacity-70" to={'/profile'}>Update profile</Link>
					</li>
					<li className="hover:text-red-500">
					<FaArrowRight className="mr-1"/> <Link className="text-white no-underline opacity-70" to={'/login'}>Login</Link>
					</li>
					<li className="hover:text-red-500">
					<FaArrowRight className="mr-1"/> <Link className="text-white no-underline opacity-70" to={'/register'}>Register</Link>
					</li>
					
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50">Services</h3>
				<ul className="space-y-1 list-none">
				<li className="hover:text-red-500 ">
					<FaArrowRight className="mr-1"/> <Link className="text-white no-underline opacity-70" >Rent</Link>
					</li>
					<li className="hover:text-red-500">
					<FaArrowRight className="mr-1"/> <Link className="text-white no-underline opacity-70" >Sale</Link>
					</li>
					<li className="hover:text-red-500">
					<FaArrowRight className="mr-1"/> <Link className="text-white no-underline opacity-70" >Booking</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-50">Contact Us</h3>
				<ul className="space-y-1 list-none">
				<li className="hover:text-red-500">
					<CiLocationOn className="mr-1"/> <Link className="text-white no-underline opacity-70" >San Francisco, California, United States</Link>
					</li>
					<li className="hover:text-red-500">
					<MdAddCall className="mr-1"/> <Link className="text-white no-underline opacity-70" >+1 (415) 555-1234</Link>
					</li>
					<li className="hover:text-red-500">
					<MdOutlineMail className="mr-1"/> <Link className="text-white no-underline opacity-70" >jdoe@example.com</Link>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400">© DreamDwellings. All rights reserved.</div>
	</div>
</footer>
    );
};

export default Footer;