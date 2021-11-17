import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const inputTitleRef = React.useRef();
  const inputLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: inputTitleRef.current.value,
      link: inputLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-card"
      title="New place"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={inputTitleRef}
      />
      <span id="card-title-input-error" className="modal__error-text"></span>
      <input
        type="url"
        className="modal__input modal__input_field_image-link"
        id="card-input-link"
        placeholder="Image link"
        name="Image link"
        required
        ref={inputLinkRef}
      />
      <span id="card-input-link-error" className="modal__error-text"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
