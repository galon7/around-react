import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, openEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

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
    setSelectedCard(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
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
        <PopupWithForm
          name="edit-profile"
          title="Edit Profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="modal__input modal__input_field_name"
            id="name-input"
            placeholder="Full name"
            name="name"
            minLength={2}
            maxLength={40}
            required
          />
          <span id="name-input-error" className="modal__error-text" />
          <input
            type="text"
            className="modal__input modal__input_field_profession"
            id="profession-input"
            placeholder="Profession"
            name="profession"
            minLength={2}
            maxLength={200}
            required
          />
          <span id="profession-input-error" className="modal__error-text" />
        </PopupWithForm>
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

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
