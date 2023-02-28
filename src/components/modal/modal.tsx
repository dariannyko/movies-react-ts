import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userKey } from '../../shared/const';
import { authorizeUser, showModal } from '../../store/actions';
import closeIcon from '../../assets/img/close.svg';
import styles from './modal.module.scss';

const userLogin = 'dariannyko';
const userPassword = '1234';

const Modal = () => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoginWarning, setIsLoginWarning] = useState<boolean>(false);
  const [isPasswordWarning, setIsPasswordWarning] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login !== userLogin) {
      setIsLoginWarning(true);
      return;
    }
    if (password !== userPassword) {
      setIsPasswordWarning(true);
      return;
    }
    dispatch(authorizeUser(true));
    localStorage.setItem(userKey, 'true');
    dispatch(showModal(false));
  };

  const closeModal = () => {
    dispatch(showModal(false));
  };

  return (
    <div className={styles.fadeBlock}>
      <div className={styles.modalWindow}>
        <div className={styles.modalHeader}>
          <h1 className={styles.title}>Авторизация</h1>
          <button className={styles.buttonClose} onClick={closeModal}>
            <img src={closeIcon} alt="" width="10" height="10" />
          </button>
        </div>
        <form action="" className={styles.inputData} onSubmit={handleSubmit}>
          <h2 className={styles.subtitle}>Логин:</h2>
          <input
            onChange={handleChangeLogin}
            type="text"
            className={styles.modalInput}
            placeholder="Login"
          />
          {isLoginWarning && (
            <div className={styles.modalWarning}>Логин введен неверно</div>
          )}
          <h2 className={styles.subtitle}>Пароль:</h2>
          <input
            onChange={handleChangePassword}
            type="password"
            className={styles.modalInput}
            placeholder="*******"
          />
          {isPasswordWarning && (
            <div className={styles.modalWarning}>Пароль введен неверно</div>
          )}
          <button className={styles.button} type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export { Modal };
