import React, { useState, useEffect } from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick }) {
  const [user, setUser] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  });

  return (
    <main>
      <section className="profile">
        <div>
          <img
            src={user.avatar}
            alt="Current user"
            className="profile__avatar"
            onClick={onEditAvatarClick}
          />
          <img src="../images/edit-img.png" alt="Edit" className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">{user.name}</h1>
            <button type="button" className="profile__info-edit" onClick={onEditProfileClick} />
          </div>
          <p className="profile__subtitle">{user.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlaceClick} />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
