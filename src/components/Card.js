function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__item">
      <img src={card.link} alt="Card" className="elements__img" onClick={handleClick} />
      <button className="elements__delete-button" />
      <div className="elements__content">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__likes">
          <button type="button" className="elements__like-button"></button>
          <p className="elements__like-number">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
