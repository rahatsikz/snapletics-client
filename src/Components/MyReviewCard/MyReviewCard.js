import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

const MyReviewCard = ({ rev }) => {
  const { _id, review, serviceName } = rev;
  const handleEdit = (e) => {
    e.preventDefault();
    const edited = e.target.edited.value;
    console.log(edited);
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ edited }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
      <div className="p-6">
        <h2 className="text-lg text-center mb-4"> {serviceName} </h2>
        <p className="text-md"> {review} </p>
        <div className="flex items-center justify-center mt-4">
          <label
            htmlFor={_id}
            className="btn btn-circle btn-outline text-xl mr-4"
          >
            <FaEdit />
          </label>
          <input type="checkbox" id={_id} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form onSubmit={handleEdit}>
                <textarea
                  name="edited"
                  className="textarea textarea-bordered focus:border-0 w-full my-4"
                  placeholder="Your Review"
                  defaultValue={review}
                ></textarea>

                <div className="modal-action justify-center">
                  <button type="submit">
                    <label htmlFor={_id} className="btn">
                      Update
                    </label>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <button className="btn btn-circle btn-outline text-xl">
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
