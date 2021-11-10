function ImagePopup({ card, onClose }) {
  return (
    <div className={`modal modal_img ${card && "modal_open"}`}>
      <div className="modal__container-img">
        <button type="button" className="modal__close" onClick={onClose} />
        <figure className="modal__figure">
          <img src={card.link} alt="Selected card" className="modal__image" />
          <figcaption className="modal__caption" />
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
