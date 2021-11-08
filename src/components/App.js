import Header from "./Header";
import Main from "./Main";
import Footer from "./footer";
import PopupWithForm from "./PopupWithForm";
// import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);

  function handleEditAvatarClick() {
    openEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    openEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    openAddPlacePopup(true);
  }

  function closeAllPopups() {
    openEditAvatarPopup(false);
    openEditProfilePopup(false);
    openAddPlacePopup(false);
  }

  function handleImageClick() {}

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleImageClick}
          onClose={closeAllPopups}
        />
        <Footer />
        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

        <template id="elements-item" />
        <div className="modal modal_type_edit-profile">
          <div className="modal__container">
            <button type="button" className="modal__close" />
            <h2 className="modal__title">edit profile</h2>
            <form action="#" className="modal__form" name="modal-form">
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
              <button type="submit" className="modal__submit-button">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="modal modal_type_add-card">
          <div className="modal__container">
            <button type="button" className="modal__close" />
            <h2 className="modal__title">New place</h2>
            <form action="#" className="modal__form" name="modal-form">
              <input
                type="text"
                className="modal__input modal__input_field_title"
                id="card-title-input"
                placeholder="Title"
                name="Title"
                minLength={1}
                maxLength={30}
                required
              />
              <span id="card-title-input-error" className="modal__error-text" />
              <input
                type="url"
                className="modal__input modal__input_field_image-link"
                id="card-input-link"
                placeholder="Image link"
                name="Image link"
                required
              />
              <span id="card-input-link-error" className="modal__error-text" />
              <button type="submit" className="modal__submit-button">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="modal modal_type_delete-card">
          <div className="modal__container">
            <button type="button" className="modal__close" />
            <h2 className="modal__title">Are you sure?</h2>
            <form action="#" className="modal__form" name="modal-form">
              <button type="submit" className="modal__submit-button">
                Yes
              </button>
            </form>
          </div>
        </div>
        <div className="modal modal_type_change-avatar">
          <div className="modal__container">
            <button type="button" className="modal__close" />
            <h2 className="modal__title">Change profile picture</h2>
            <form action="#" className="modal__form" name="modal-form">
              <input
                type="url"
                className="modal__input modal__input_field_profile-picture-link"
                id="profile-picture-link"
                placeholder="Profile picture link"
                name="avatar"
                required
              />
              <span id="profile-picture-link-error" className="modal__error-text" />
              <button type="submit" className="modal__submit-button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
