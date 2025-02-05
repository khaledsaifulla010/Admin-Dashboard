import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("myProducts")) || [];
    setMyProducts(storedProducts);
  }, []);

  const handleDeleteProduct = (id) => {
    axios.delete(`https://api.restful-api.dev/objects/${id}`).then((res) => {
      console.log(res.data);
      const updatedProducts = myProducts.filter((product) => product.id !== id);
      setMyProducts(updatedProducts);
      localStorage.removeItem("myProducts", JSON.stringify(updatedProducts));
      toast.success("Deleted Product Successfully!", {
        position: "top-right",
        theme: "colored",
      });
    });
  };

  return (
    <div className="lg:ml-36">
      <div>
        <div className="flex items-center justify-around mt-12">
          <h1 className="text-5xl font-bold">My Products</h1>
          <h1 className="text-5xl font-bold">
            My Total Products: {myProducts.length}
          </h1>
        </div>
        <div>
          <div className="mt-12">
            {myProducts.length > 0 ? (
              <div className="overflow-x-auto mt-8 mb-12 px-8">
                <div className="rounded-lg shadow-lg border border-gray-300">
                  <table className="table w-full border-collapse">
                    <thead className="bg-gray-700 text-white text-lg font-extrabold">
                      <tr>
                        <th className="text-center py-3 px-4">SL/No.</th>
                        <th className="text-center py-3 px-4">Product Name</th>
                        <th className="text-center py-3 px-4">Year</th>
                        <th className="text-center py-3 px-4">Price</th>
                        <th className="text-center py-3 px-4">CPU Model</th>
                        <th className="text-center py-3 px-4">
                          Hard Disk Size
                        </th>
                        <th className="text-center py-3 px-4">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {myProducts.map((product, index) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                          <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                            {index + 1}
                          </td>

                          <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
                            {product.name}
                          </td>

                          <td className="text-center py-3 px-4 text-cyan-700 font-bold text-base">
                            {product.data?.year || "None"}
                          </td>

                          <td className="text-center py-3 px-4 text-orange-700 font-bold text-base">
                            {product.data?.price || "None"}
                          </td>

                          <td className="text-center py-3 px-4 text-cyan-700 font-bold text-base">
                            {product.data?.["CPU model"] || "None"}
                          </td>

                          <td className="text-center py-3 px-4 text-orange-700 font-bold text-base">
                            {product.data?.["Hard disk size"] || "None"}
                          </td>
                          <td>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-center py-3 px-4 text-red-700 font-bold text-3xl ml-2"
                            >
                              <RiDeleteBin2Fill />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <h1 className="text-2xl font-bold text-slate-500 text-center mt-36 mb-36">
                No Products Found!
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
