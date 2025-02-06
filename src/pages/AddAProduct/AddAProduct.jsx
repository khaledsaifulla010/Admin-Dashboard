import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddAProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const hardDiskSize = `${Number(data["Hard disk size"])} GB`;
    const formattedData = {
      name: data.name,
      data: {
        year: data.year,
        price: data.price,
        "CPU model": data["CPU model"],
        "Hard disk size": hardDiskSize,
      },
    };

    const res = await axios.post(
      "https://api.restful-api.dev/objects",
      formattedData
    );
    const currentData = JSON.parse(localStorage.getItem("products")) || [];
    currentData.push(res.data);
    localStorage.setItem("products", JSON.stringify(currentData));
    toast.success("Added Product Successfully!", {
      position: "top-right",
      theme: "colored",
    });
    reset();
  };

  return (
    <div>
      <h2 className="text-5xl font-semibold mb-4 text-center mt-16">
        Add A Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white shadow-lg max-w-lg mx-auto p-6  rounded-lg mt-10 border border-slate-400"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold">
            Name<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-2  border-slate-400 rounded"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-semibold">
            Year<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            {...register("year", {
              required: "Year is required",
              valueAsNumber: true,
            })}
            className="w-full p-2 border border-slate-400 rounded"
            type="number"
          />
          {errors.year && (
            <p className="text-red-500 text-sm">{errors.year.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold">
            Price<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
            className="w-full p-2 border border-slate-400 rounded"
            type="number"
            step="0.01"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* CPU Model */}
        <div>
          <label className="block text-sm font-semibold">
            CPU Model<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            {...register("CPU model", { required: "CPU Model is required" })}
            className="w-full p-2 border border-slate-400 rounded"
            type="text"
          />
          {errors["CPU model"] && (
            <p className="text-red-500 text-sm">
              {errors["CPU model"].message}
            </p>
          )}
        </div>

        {/* Hard Disk Size */}
        <div>
          <label className="block text-sm font-semibold">
            Hard Disk Size<span className="text-red-500 font-semibold">*</span>
          </label>
          <input
            {...register("Hard disk size", {
              required: "Hard Disk Size is required",
            })}
            className="w-full p-2 border border-slate-400 rounded"
            type="text"
          />
          {errors["Hard disk size"] && (
            <p className="text-red-500 text-sm">
              {errors["Hard disk size"].message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-100 text-blue-700 font-bold text-lg border border-blue-300 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAProduct;
