function Main(props) {
  return (
    <main>
      <section className="profile">
        <div>
          <img
            src="../images/Jacques_Cousteau.jpg"
            alt="Jacques Cousteau"
            className="profile__avatar"
          />
          <img
            src="../images/edit-img.png"
            alt="Edit"
            className="profile__avatar-edit"
            onClick={props.onEditAvatarClick}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              type="button"
              className="profile__info-edit"
              onClick={props.onEditProfileClick}
            />
          </div>
          <p className="profile__subtitle">Explorer</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlaceClick} />
      </section>
      <section className="elements" />
    </main>
  );
}

export default Main;
