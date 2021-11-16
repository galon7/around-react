import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";
import editPng from "../images/edit-img.png";

function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id);
    const newCards = cards.filter((c) => c._id !== card._id);
    setCards(newCards);
  }

  return (
    <main>
      <section className="profile">
        <div>
          <img
            src={currentUser.avatar}
            alt="Current user"
            className="profile__avatar"
            onClick={onEditAvatarClick}
          />
          <img src={editPng} alt="Edit" className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="profile__info-edit" onClick={onEditProfileClick} />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlaceClick} />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
