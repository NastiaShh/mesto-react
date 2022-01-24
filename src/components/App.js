import { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <body class="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />

      <PopupWithForm
        title='Редактировать профиль'
        name='profile'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="name-input" type="text" name="name" placeholder="Жак-Ив Кусто" required className="popup__input popup__input_profile_name" minLength="2" maxLength="40" />
            <span className="popup__input-error name-input-error"></span>
            <input id="description-input" type="text" name="description" placeholder="Исследователь океана" required className="popup__input popup__input_profile_description" minLength="2" maxLength="200" />
            <span className="popup__input-error description-input-error"></span>
            <button type="submit" className="popup__save popup__save_profile">Сохранить</button>
          </>
        }
      />
      <PopupWithForm
        title='Новое место'
        name='place'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="place-input" type="text" name="name" placeholder="Название" required className="popup__input popup__input_place_name" minLength="2" maxLength="30" />
            <span className="popup__input-error place-input-error"></span>
            <input id="link-input" type="url" name="description" placeholder="Ссылка на картинку" required className="popup__input popup__input_place_description" />
            <span className="popup__input-error link-input-error"></span>
            <button type="submit" className="popup__save popup__save_place">Создать</button>
          </>
        }
      />
      <PopupWithForm
        title='Обновить аватар'
        name='change-avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку" required className="popup__input popup__input_change-avatar" />
            <span className="popup__input-error avatar-input-error"></span>
            <button type="submit" className="popup__save popup__save_change-avatar">Сохранить</button>
          </>
        }
      />

      <ImagePopup />

      <template class="template template_card">
        <article class="place">
          <button type="button" class="place__delete" aria-label="Удалить место"></button>
          <img class="place__image" src="/" alt="/" />
          <div class="place__info">
            <h2 class="place__title"></h2>
            <div class="place__like-container">
              <button type="button" class="place__like" aria-label="Поставить лайк"></button>
              <div class="place__like-count"></div>
            </div>
          </div>
        </article>
      </template>
  
    </body>
  );
}

export default App;