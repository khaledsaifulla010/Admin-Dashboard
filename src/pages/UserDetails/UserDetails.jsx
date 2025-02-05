import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div className="">
      <h1 className=" text-5xl text-center font-bold mt-24 ">
        Details of <span className="text-green-700">{user.name}</span>
      </h1>
      <div className="flex justify-between mt-16">
        <div className=" w-[350px]">
          <h1 className=" text-3xl font-semibold text-indigo-700 text-center">
            User Details
          </h1>
          <div className=" border-indigo-500 border  p-4 text-center rounded-md mt-2">
            <h1 className=" text-lg font-bold ">User Id : {user.id} </h1>
            <h1 className=" text-lg font-bold ">Name : {user.name} </h1>
            <h1 className=" text-lg font-bold ">Email : {user.email} </h1>
            <h1 className=" text-lg font-bold ">Phone : {user.phone} </h1>
            <h1 className=" text-lg font-bold ">Website : {user.website} </h1>
          </div>
        </div>
        <div className=" w-[350px]">
          <h1 className=" text-3xl font-semibold text-center text-red-700">
            User Address
          </h1>
          <div className=" border-red-500 border p-4 text-center rounded-md mt-2">
            <h1 className=" text-xl font-bold ">City : {user.address.city} </h1>
            <h1 className=" text-xl font-bold ">
              Street : {user.address.street}{" "}
            </h1>
            <h1 className=" text-xl font-bold ">
              Suite : {user.address.suite}{" "}
            </h1>
            <h1 className=" text-xl font-bold">
              Zipcode : {user.address.zipcode}{" "}
            </h1>
          </div>
        </div>
        <div className=" w-[350px]">
          <h1 className=" text-3xl font-semibold text-center text-cyan-700">
            Company Details
          </h1>
          <div className=" border-cyan-500 border text-center p-4 rounded-md mt-2">
            <h1 className=" text-xl font-bold">
              Company Name : {user.company.name}{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
