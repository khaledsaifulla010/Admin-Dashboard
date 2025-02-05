import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Sign in Successfully!", {
          position: "top-right",
          theme: "colored",
        });
      })
      .catch((error) => {
        toast.error("Something Went Wrong!", {
          position: "top-right",
          theme: "colored",
        });
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mt-24 text-center">Please Login</h1>

      <div className="mt-12">
        <button
          onClick={handleLoginWithGoogle}
          className="border p-2 rounded-md font-bold text-xl w-[300px] lg:ml-[430px] flex items-center gap-1 justify-center"
        >
          <FcGoogle /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
