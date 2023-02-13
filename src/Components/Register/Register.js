import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {
  const { createUser, profileInfo } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(name, photo);
        toast.success("Registration completed");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });

    const profileUpdate = (name, photo) => {
      const profile = {
        displayName: name,
        photoURL: photo,
      };
      profileInfo(profile)
        .then(() => {})
        .catch((err) => console.error(err));
    };
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Register - Snapletics</title>
        </Helmet>
      </HelmetProvider>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl text-center font-semibold w-96">
                  Sign Up
                </h1>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      id="fName"
                      name="fName"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Full Name"
                      required
                    />
                    <label
                      htmlFor="fName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="photo"
                      name="photo"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Photo URL"
                      required
                    />
                    <label
                      htmlFor="photo"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your Photo URL
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your Email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your Password
                    </label>
                  </div>
                  <div className="relative text-center pt-4">
                    <button
                      type="submit"
                      className="bg-cyan-500 text-white rounded-md px-8 py-2"
                    >
                      Register
                    </button>
                  </div>
                </form>

                <div className="mt-3 text-xs flex justify-between items-center text-cyan-600 ">
                  <p className="dark:text-white">Already a member?</p>
                  <Link to="/login">
                    <button className="py-2 px-5 bg-white border rounded-xl">
                      Sign in
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
