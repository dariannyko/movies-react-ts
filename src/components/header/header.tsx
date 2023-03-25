import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import { favoriteList, userKey } from '../../shared/const';
import logo from '../../assets/img/logo.svg';
import { StoreState } from '../../store/state-types';
import { applyFavorites, authorizeUser, showModal } from '../../store/actions';
import styles from './header.module.scss';

interface HeaderProps {
  resetFilters: () => void;
}

const returnBack = -1;

const Header = ({ resetFilters }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userStatus = useSelector((state: StoreState) => state.authorize);

  const logIn = () => {
    if (!userStatus) {
      dispatch(showModal(true));
    } else {
      dispatch(authorizeUser(false));
      localStorage.removeItem(userKey);
      dispatch(applyFavorites(favoriteList[0]));
      resetFilters();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to={`/`}>
          <img src={logo} alt="Logo" />
        </Link>
        <div>
          {location.pathname !== '/' && (
            <button
              className={styles.back}
              onClick={() => {
                navigate(returnBack);
              }}
            >
              Назад
            </button>
          )}
          <Button children={!userStatus ? 'Логин' : 'Выйти'} onClick={logIn} />
        </div>
      </div>
    </div>
  );
};

export { Header };
export type { HeaderProps };
