function handleEditAvatarClick() {
  const x = document.querySelector(".modal_type_change-avatar");
  x.classList.add("modal_open");
}
function handleEditProfileClick() {
  const y = document.querySelector(".modal_type_edit-profile");
  y.classList.add("modal_open");
}
function handleAddPlaceClick() {
  const z = document.querySelector(".modal_type_add-card");
  z.classList.add("modal_open");
}

function Main() {
  return (
    <main>
      <section className="profile">
        <div>
          <img
            src="../images/Jacques_Cousteau.jpg"
            alt="photo of Jacques Cousteau"
            className="profile__avatar"
          />
          <img
            src="../images/edit-img.png"
            alt="Edit profile photo"
            className="profile__avatar-edit"
            onClick={handleEditAvatarClick}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-header">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button type="button" className="profile__info-edit" onClick={handleEditProfileClick} />
          </div>
          <p className="profile__subtitle">Explorer</p>
        </div>
        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick} />
      </section>
      <section className="elements" />
    </main>
  );
}

export default Main;
