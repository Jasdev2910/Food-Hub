const OfferCard = ({ offer, condition }) => {
  return (
    <div className="offer-card">
      <h2>{offer}</h2>
      <p>{condition}</p>
    </div>
  );
};

export default OfferCard;
