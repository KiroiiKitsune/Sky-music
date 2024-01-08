import ContentTitle from "../contentTitle";
import PlayListFilter from "../PlayListFilter/PlayListFilter";
import * as S from './styles';

function CenterBlockContent({
  loading,
  getError,
  playList,
}) {
  return (
    <S.CenterBlock>
      <ContentTitle />
      <PlayListFilter
        playList={playList}
        loading={loading}
        getError={getError}
      />
    </S.CenterBlock>
  );
}

export default CenterBlockContent;
