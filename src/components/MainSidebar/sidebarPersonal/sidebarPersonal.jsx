import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../../store/selectors/selectors';
import { PersonIcon } from '../../../iconSVG/personIcon';
import * as S from './styles';
import {
  addPlayTrack,
  addUser,
} from '../../../store/actions/creators/creators';

function SidebarPersonal() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dispatch(addUser(null));
    dispatch(addPlayTrack({})); 
    localStorage.clear();
    navigate('/login');
  };

  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <S.SidebarButton onClick={exit} type='button'>
        <PersonIcon />
      </S.SidebarButton>
    </S.SidebarPersonal>
  );
}

export default SidebarPersonal;
