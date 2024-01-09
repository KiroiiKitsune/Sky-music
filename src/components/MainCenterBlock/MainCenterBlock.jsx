import CenterBlockSearch from './centerBlockSearch';
import FilterButton from './filterButton';
import CenterBlockContent from './centerBlockContent/centerBlockContent';
import HeaderName from './HeaderName/HeaderName';
import * as S from './styles';

function MainCenterBlock({ loading, getError, playList }) {
  return (
    <S.MainCenterBlock>
      <CenterBlockSearch />
      <HeaderName playList={playList} loading={loading} />
      <FilterButton />
      <CenterBlockContent
        playList={playList}
        loading={loading}
        getError={getError}
      />
    </S.MainCenterBlock>
  );
}

export default MainCenterBlock;
