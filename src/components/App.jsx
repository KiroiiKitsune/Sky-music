import { useEffect } from 'react';
import { setTheme } from '../utils/theme';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../store/actions/creators/creators';
import { playTrackSelector } from '../store/selectors/selectors';
import AppRoutes from './AppRoutes/AppRoutes';
import MainBar from './MainBar/MainBar';
import { GlobalStyle } from '../styles/global';

setTheme();

function App() {
  const playTrack = useSelector(playTrackSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser(JSON.parse(localStorage.getItem('user'))));
  }, []);

  return (
    <>
      <GlobalStyle />
      {playTrack.id ? <MainBar playTrack={playTrack} /> : null}
      <AppRoutes />
    </>
  );
}

export default App;
