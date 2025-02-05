import { Link } from "react-router-dom";
import useAllUsers from "../../hooks/useAllUsers";

const Allusers = () => {
  const [users] = useAllUsers();
  return (
    <div className="lg:ml-36">
      <div>
        <div className="flex items-center justify-around mt-12">
          <h1 className="text-5xl font-bold">All Users </h1>
          <h1 className="text-5xl font-bold">Total Users : {users.length} </h1>
        </div>
        <div>
          <div className="mt-12">
            {users.length > 0 ? (
              <div className="overflow-x-auto mt-8 mb-12 px-8">
                <div className="rounded-lg shadow-lg border border-gray-300">
                  <table className="table w-full border-collapse">
                    <thead className="bg-gray-700 text-white text-lg font-extrabold">
                      <tr>
                        <th className="text-center py-3 px-4">SL/No.</th>
                        <th className="text-center py-3 px-4">User Name</th>
                        <th className="text-center py-3 px-4">User Email</th>

                        <th className="text-center py-3 px-4">User City </th>
                        <th className="text-center py-3 px-4">User Company</th>
                        <th className="text-center py-3 px-4">User Details</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {users.map((user, index) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                          <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                            {index + 1}
                          </td>

                          <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
                            {user.name}
                          </td>
                          <td className="text-center py-3 px-4 text-green-700 font-bold text-base">
                            {user.email}
                          </td>
                          <td className="text-center py-3 px-4 text-cyan-700 font-bold text-base">
                            {user.address.city}
                          </td>
                          <td className="text-center py-3 px-4 text-orange-700 font-bold text-base">
                            {user.company.name}
                          </td>
                          <td>
                            <Link
                              to={`/userDetails/userId/${user.id}`}
                              className="px-2 border rounded-md font-bold text-lg text-blue-700 bg-blue-100 border-blue-300 ml-6"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <h1 className="text-2xl font-bold text-slate-500 text-center mt-36 mb-36">
                No Users Found!
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allusers;
