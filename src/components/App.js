import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, openEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = useState(false);
  const [isImagePopupOpen, openImagePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
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

  function handleUpdateUser(userNew) {
    api.editProfile(userNew).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(newUrl) {
    api.updateAvatar(newUrl).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit(place) {
    api.addCardApi(place).then((data) => {
      setCards([data, ...cards]);
      closeAllPopups();
    });
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id);
    const newCards = cards.filter((c) => c._id !== card._id);
    setCards(newCards);
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
            cards={cards}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            name="edit-profile"
            title="Edit Profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
