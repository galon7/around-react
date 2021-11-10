import { api } from "../utils/api";
import Card from "./Card";
import React from "react";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  });

  return (
    <main>
      <section className="profile">
        <div>
          <img
            src={userAvatar}
            alt="Current user"
            className="profile__avatar"
            onClick={props.onEditAvatarClick}
          />
          <img src="../images/edit-img.png" alt="Edit" className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__info-edit"
              onClick={props.onEditProfileClick}
            />
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlaceClick} />
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
