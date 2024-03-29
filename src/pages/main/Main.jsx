import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MainNav from '../../components/MainNav/MainNav';
import MainCenterBlock from '../../components/MainCenterBlock/MainCenterBlock';
import MainSidebar from '../../components/MainSidebar/MainSidebar';
import getTrackAll from '../../api/Api';
import addTracks from '../../store/actions/creators/creators';
import * as S from './styles';

function Main() { 
  const [getError, setGetError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const asyncGetTrackAll = async () => {
    try {
      const response = await getTrackAll();
      dispatch(addTracks(response));
    } catch (error) {
      setGetError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncGetTrackAll();
  }, []);

  return (
    <S.Main>
      <MainNav />
      <MainCenterBlock playList='Треки' loading={loading} getError={getError} />
      <MainSidebar loading={loading} />
    </S.Main>
  );
}

export default Main;
