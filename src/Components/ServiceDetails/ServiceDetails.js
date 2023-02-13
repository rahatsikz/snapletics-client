import React, { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { _id, name, img, price, ratings, description } = details;
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const ratings = form.rating.value;
    const review = form.review.value;

    const reviewBody = {
      service: _id,
      serviceName: name,
      reviewer: fName,
      email,
      photo,
      ratings,
      review,
    };

    console.log(fName, photo, email, ratings, review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Posted Successfully");
          form.reset();
        }
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, reviews]);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Service Detail - Snapletics</title>
        </Helmet>
      </HelmetProvider>
      <div className="relative">
        <div
          className="hero h-[40vh]"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className=" text-5xl font-bold">{name}</h1>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 lg:w-1/3 mx-auto absolute -bottom-1/2 md:-bottom-20 left-1/3">
          <div className="p-6 grid md:grid-cols-2 justify-items-center gap-8">
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-600">Price:</span> ${price}.00{" "}
            </h2>
            <h2 className="text-xl flex items-center font-semibold">
              <span className="text-cyan-600">Ratings:</span> &nbsp;
              {ratings === 5 ? (
                <div className="flex text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              ) : (
                <div className="flex text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              )}
            </h2>
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-600">Hour rate: </span>
              {price > 30 ? "Mutable" : "Fixed"}
            </h2>
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-600">Time limit:</span> Flexible
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:mt-24 md:mt-36 mt-52 container mx-auto">
        <p className="text-cyan-700 tracking-wider text-lg text-center mb-4">
          Things you want to know
        </p>
        <p> {description} </p>
      </div>

      <div className="w-2/3 mx-auto">
        <p className="text-cyan-700 tracking-wider text-lg text-center mt-8">
          Review of Clients
        </p>
        {reviews.map((rev) => (
          <Reviews key={rev._id} rev={rev}></Reviews>
        ))}
      </div>

      <p className="text-cyan-700 tracking-wider text-lg text-center mt-8">
        Add your Review
      </p>
      {user?.uid ? (
        <form
          onSubmit={handleReview}
          className="w-5/6 mx-auto mt-8 mb-12 bg-gray-50 p-12 rounded-lg"
        >
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="fName"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              className="input focus:border-0 input-bordered w-full"
            />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              defaultValue={user?.photoURL}
              className="input focus:border-0 input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              readOnly
              className="input focus:border-0 input-bordered w-full"
            />
            <select
              name="rating"
              defaultValue={"default"}
              className="select w-full text-gray-400 font-normal focus:border-0 input-bordered text-md"
            >
              <option value={"default"} disabled>
                Your Ratings
              </option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <textarea
            name="review"
            className="textarea textarea-bordered focus:border-0 w-full my-4"
            placeholder="Your Review"
          ></textarea>
          <button
            type="submit"
            className="btn btn-block bg-[#649DAD] border-0 text-white"
          >
            Post The Review
          </button>
        </form>
      ) : (
        <div className="text-center my-8">
          <Link
            to="/login"
            state={{ from: location }}
            replace
            className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-cyan-500 px-5 text-sm font-medium tracking-wide text-cyan-500 transition duration-300 hover:border-cyan-600 hover:text-cyan-600 focus:border-cyan-700 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:text-cyan-300 disabled:shadow-none"
          >
            <span>Please Login before adding a Review</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
