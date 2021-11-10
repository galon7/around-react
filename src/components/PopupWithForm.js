function PopupWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name} ${props.isOpen ? "modal_open" : ""}`}>
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={props.onClose} />
        <h2 className="modal__title">{props.title}</h2>
        <form action="#" className="modal__form" name="modal-form">
          {props.children}
          <button type="submit" className="modal__submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
