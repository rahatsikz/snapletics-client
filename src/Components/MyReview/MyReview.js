import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/UserContext";
import MyReviewCard from "../MyReviewCard/MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email, myReviews]);

  return (
    <div>
      {myReviews.length === 0 ? (
        <div className="h-[90vh] flex items-center justify-center">
          <p className="text-xl font-semibold"> No Reviews were added</p>
        </div>
      ) : (
        <p className="text-cyan-700 tracking-wider text-lg text-center mt-4">
          {user?.displayName}'s reviews
        </p>
      )}

      <div className="container mx-auto grid lg:grid-cols-3 gap-8 mt-12">
        {myReviews.map((rev) => (
          <MyReviewCard key={rev._id} rev={rev}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
