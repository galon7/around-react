import { api } from "../utils/api";
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
        console.log(data);
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
        // userID = data._id;
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  });

  return (
    <main>
      <section className="profile">
        <div>
          <img src={userAvatar} alt="Current user" className="profile__avatar" />
          <img
            src="../images/edit-img.png"
            alt="Edit"
            className="profile__avatar-edit"
            onClick={props.onEditAvatarClick}
          />
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
          <div key={card._id} className="elements__item">
            <img src={card.link} alt="Card" class="elements__img" />
            <button className="elements__delete-button"></button>
            <div className="elements__content">
              <h2 className="elements__title">{card.name}</h2>
              <div className="elements__likes">
                <button type="button" className="elements__like-button"></button>
                <p className="elements__like-number">{card.likes.length}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;
