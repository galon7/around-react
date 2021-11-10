function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__item" onClick={handleClick}>
      <img src={props.card.link} alt="Card" className="elements__img" />
      <button className="elements__delete-button" />
      <div className="elements__content">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__likes">
          <button type="button" className="elements__like-button"></button>
          <p className="elements__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
