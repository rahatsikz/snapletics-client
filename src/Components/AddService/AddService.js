import React from "react";
import { toast } from "react-hot-toast";

const AddService = () => {
  const handleServiceAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const serviceBody = {
      name: title,
      price,
      ratings: rating,
      img: photo,
      description,
    };

    console.log(title, photo, price, rating, description);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Service added");
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto mt-12">
      <p className="text-cyan-700 tracking-wider text-lg text-center mb-8">
        Add your desired service
      </p>
      <form onSubmit={handleServiceAdd}>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Service title"
            className="input focus:border-0 input-bordered w-full"
          />
          <input
            type="text"
            name="photo"
            placeholder="Service Photo URL"
            className="input focus:border-0 input-bordered w-full"
          />
          <input
            type="text"
            name="price"
            placeholder="Set Price"
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
          name="description"
          className="textarea textarea-bordered focus:border-0 w-full my-4"
          placeholder="Service Description"
        ></textarea>
        <button
          type="submit"
          className="btn btn-block bg-[#649DAD] border-0 text-white"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
