function PopupWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name} ${props.isOpen ? "modal_open" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={props.onClose} />
        <h2 className="modal__title">{props.title}</h2>
        <form action="#" className="modal__form" name={props.name}>
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
  );
}

export default PopupWithForm;
