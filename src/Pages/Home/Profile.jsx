import { useContext } from "react";
import { AuthContext } from "../../Route/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firbase/firbase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const photoRegex = /^https?:\/\/(?:www\.)?[^\s/$.?#].[^\s]*$/;
  const navigate=useNavigate()
  const handleSaveChanges = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    if (name.length < 3) {
      return toast.error("name shouldbe up to 2 charecter");
    }
    const photo = e.target.photo.value;
    if(!photoRegex.test(photo)){
		return toast.error("Provide a valid URL");
	}
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        toast.success("SaveChanges succesfully 👍");
		navigate('/user')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSaveChanges}>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50  bg-[#F2F6F7] py-28 ">
        <legend className="p-1">EDIT YOUR PROFILE</legend>
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">You can Edit you profile info here</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 px-2"  data-aos="fade-up"
                  data-aos-duration="1500">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full p-3  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <br />
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Photo Url
              </label>
              <input
                id="website"
                name="photo"
                type="text"
                placeholder="https://"
                required
                className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full"  data-aos="fade-up"
                  data-aos-duration="1500">
              <div className="flex items-center space-x-2">
                <img
                  src={
                    user?.photoURL ||
                    "https://source.unsplash.com/30x30/?random"
                  }
                  alt=""
                  className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                />
                <button
                  type="submit"
                  className="px-4 py-2 border rounded-md bg-[#FF5A3D] border-none  text-white text-xl dark:border-gray-800 cursor-pointer "
                >
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Profile;
