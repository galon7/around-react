import { api } from "../utils/api";
import React from "react";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

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
      <section className="elements" />
    </main>
  );
}

export default Main;
