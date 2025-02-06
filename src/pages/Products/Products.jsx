import { Link } from "react-router-dom";
import useAllProducts from "../../hooks/useAllProducts";
import { useState } from "react";
const Products = () => {
  const [products] = useAllProducts();
  const [isSortedAsc, setIsSortedAsc] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortToggle = () => {
    setIsSortedAsc(!isSortedAsc);
  };

  const filteredProducts = products.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedProducts = isSortedAsc
    ? [...filteredProducts]
    : [...filteredProducts].reverse();

  return (
    <div>
      <div className="lg:ml-36">
        <div>
          <div className="flex items-center justify-around mt-12">
            <h1 className="text-5xl font-bold">All Products </h1>
            <h1 className="text-5xl font-bold">
              Total Products : {products.length}{" "}
            </h1>
          </div>
          <div className="divider px-10"></div>
          <div className="flex items-center justify-between px-10 mt-10">
            <input
              type="text"
              placeholder="Search by Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border rounded-md text-lg"
            />
            <button
              onClick={handleSortToggle}
              className="px-4 py-2 text-white bg-blue-500 rounded-md font-bold"
            >
              Sort by {isSortedAsc ? "Descending" : "Ascending"}
            </button>
          </div>
          <div>
            <div className="mt-12">
              {products.length > 0 ? (
                <div className="overflow-x-auto mt-8 mb-12 px-8">
                  <div className="rounded-lg shadow-lg border border-gray-300">
                    <table className="table w-full border-collapse">
                      <thead className="bg-gray-700 text-white text-lg font-extrabold">
                        <tr>
                          <th className="text-center py-3 px-4">SL/No.</th>
                          <th className="text-center py-3 px-4">
                            Product Name
                          </th>
                          <th className="text-center py-3 px-4">
                            Product Color
                          </th>

                          <th className="text-center py-3 px-4">
                            Product Capacity{" "}
                          </th>

                          <th className="text-center py-3 px-4">
                            Product Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        {sortedProducts.map((product, index) => (
                          <tr key={product.id} className="hover:bg-gray-100">
                            <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                              {isSortedAsc
                                ? index + 1
                                : filteredProducts.length - index}
                            </td>

                            <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
                              {product.name}
                            </td>

                            <td className="text-center py-3 px-4 text-cyan-700 font-bold text-base">
                              {product.data
                                ? product.data.color ||
                                  product.data.Color ||
                                  "Not Available"
                                : "Not Available"}
                            </td>
                            <td className="text-center py-3 px-4 text-orange-700 font-bold text-base">
                              {product.data
                                ? product.data.capacity ||
                                  product.data.Capacity ||
                                  product.data["capacity GB"] ||
                                  "Not Available"
                                : "Not Available"}
                            </td>
                            <td>
                              <Link
                                to={`/productDetails/productId/${product.id}`}
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
                  No Products Found!
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
