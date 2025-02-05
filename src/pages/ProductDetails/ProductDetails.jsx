import { BsCpuFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHardDrive } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div>
      <h1 className=" text-5xl text-center font-bold mt-24 ">
        Details of <span className="text-blue-700">{product.name}</span>
      </h1>
      <div className="max-w-[650px] mt-12 mx-auto rounded-lg overflow-hidden shadow-lg bg-white p-8 border border-gray-300 text-center">
        {/* Product Name */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {product.name || "Not Available"}
        </h2>

        {/* Product Details in Flexbox */}
        <div className="flex justify-center gap-6 mb-4">
          <p className="text-xl text-indigo-700 font-semibold flex items-center gap-1">
            <FaCalendarAlt /> <strong>Year:</strong>{" "}
            {product.data?.year || "Not Available"}
          </p>
          <p className="text-xl text-green-700 font-semibold flex items-center gap-1">
            <RiMoneyDollarCircleFill /> <strong>Price:</strong> ${" "}
            {product.data?.price || "Not Available"}
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <p className="text-xl text-orange-700 font-semibold flex items-center gap-1">
            <BsCpuFill /> <strong>CPU Model:</strong>{" "}
            {product.data?.["CPU model"] || "Not Available"}
          </p>
          <p className="text-xl text-cyan-700 font-semibold flex items-center gap-1">
            <FaHardDrive />
            <strong>Hard Disk Size:</strong>{" "}
            {product.data?.["Hard disk size"] || "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
