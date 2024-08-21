const DestinationCard = ({ dest }) => {
  return (
    <div className="DestinationCard cursor-pointer">
      <div className="imgContainer hover:*:scale-110 relative rounded-2xl overflow-hidden">
        <img
          className="transition-all duration-300 ease-in-out object-cover w-full"
          src={dest.desImage}
          alt="destination"
        />
        <div className="price absolute top-3 right-5 bg-bg-white text-majorelle-blue py-1.5 px-2 rounded-2xl">
          ${dest.price}
        </div>
      </div>
      <div className="details">
        <h3 className="text-xl mt-3">{dest.desTitle}</h3>
        <span className="text-gunmetal block my-3">{dest.location}</span>
        <div className="reviews flex items-center">
          <div className="rate flex items-center justify-center p-1.5 bg-sunglow-alpha-10 rounded-md mr-3">
            <ion-icon name="star" aria-hidden="true"></ion-icon>
            <span className="">{dest.rate}</span>
          </div>
          <div className="review">({dest.reviews})</div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
