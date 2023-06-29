const Rating = ({ ratingData }) => {
  const { rate, count } = ratingData;

  const rating = Math.round(rate);
  const fullStars = Array.from({ length: rating }, (_, index) => (
    <input
      key={index}
      type="radio"
      disabled
      name="rating-2"
      className="mask mask-star-2 bg-orange-400"
    />
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <input
      key={index}
      type="radio"
      disabled
      name="rating-2"
      className="mask mask-star-2 opacity-30 bg-orange-400"
    />
  ));

  return (
    <div className="rating my-2">
      {fullStars}
      {emptyStars}
      <h3 className="text-[1rem] my-1 ml-2  font-normal">by {count} users</h3>
    </div>
  );
};

export default Rating;
