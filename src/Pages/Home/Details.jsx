import { Link, useLoaderData, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const Details = () => {
  const { id } = useParams();
  const card = useLoaderData();
  const allData = card.find((item) => item.id == id);
  const {
    image,
    estate_title,
    segment,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = allData;
  return (

    <div className="card lg:card-side bg-base-100 shadow-xl">
      <PageTitle title={'Property Details'}></PageTitle>
      <figure className="bg-gray-200 rounded-lg m-5 p-10 lg:w-2/5">
        <img className="" src={image} alt="Album" />
      </figure>
      <div className="card-body lg:w-1/2">
        <span>{id}</span>
        <h2 className="text-2xl font-bold">{estate_title}</h2>
        <p className="opacity-70">{description}</p>

        <div>
          <div className="overflow-x-auto">
            <h3 className="text-2xl font-bold">Details :</h3>
            <p>Segment Name : {segment}</p>
            <p>price : {price} </p>
            <p>Status : {status} </p>
            <p>Area : {area} </p>
            <p>location : {location} </p>
          </div>
          <div className="overflow-x-auto mb-12">
            <h3 className="text-2xl font-bold">facilities :</h3>
            {facilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </div>
          <Link
            to={'/'}
            className="relative rounded-sm px-5  py-3 overflow-hidden font-bold no-underline  text-white bg-[#FF5A3D] border border-gray-100  shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-200 delay-200    group-hover:text-white ease">
              Back to home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
