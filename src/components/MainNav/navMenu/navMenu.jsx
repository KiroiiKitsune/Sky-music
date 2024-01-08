import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  addPlayTrack,
  addUser,
} from '../../../store/actions/creators/creators';
import { SwitchTheme } from '../../SwitchTheme';
import * as S from './styles';

function NavMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dispatch(addUser(null));
    dispatch(addPlayTrack({}));
    localStorage.clear();
    navigate('/login');
  };

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to='/'>Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to='/favorites'>Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem onClick={exit} type='button'>
          Выйти
        </S.MenuItem>
      </S.MenuList>
      <SwitchTheme />
    </S.NavMenu>
  );
}

export default NavMenu;
