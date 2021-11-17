import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, openEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = useState(false);
  const [isImagePopupOpen, openImagePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  function handleEditProfileClick() {
    openEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    openAddPlacePopup(true);
  }

  function handleEditAvatarClick() {
    openEditAvatarPopup(true);
  }

  function closeAllPopups() {
    openEditAvatarPopup(false);
    openEditProfilePopup(false);
    openAddPlacePopup(false);
    openImagePopup(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    openImagePopup(true);
  }

  function handleUpdateUser() {
    api.editProfile(currentUser).then((data) => {
      console.log(currentUser);
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onClose={closeAllPopups}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <PopupWithForm
            name="add-card"
            title="New place"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              className="modal__input modal__input_field_title"
              id="card-title-input"
              placeholder="Title"
              name="Title"
              minLength="1"
              maxLength="30"
              required
            />
            <span id="card-title-input-error" className="modal__error-text"></span>
            <input
              type="url"
              className="modal__input modal__input_field_image-link"
              id="card-input-link"
              placeholder="Image link"
              name="Image link"
              required
            />
            <span id="card-input-link-error" className="modal__error-text"></span>
          </PopupWithForm>

          <PopupWithForm
            name="change-avatar"
            title="Change profile picture"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              className="modal__input modal__input_field_profile-picture-link"
              id="profile-picture-link"
              placeholder="Profile picture link"
              name="avatar"
              required
            />
            <span id="profile-picture-link-error" className="modal__error-text"></span>
          </PopupWithForm>

          <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
