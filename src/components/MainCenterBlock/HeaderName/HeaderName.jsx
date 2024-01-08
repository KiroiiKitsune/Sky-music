import * as S from './styles';

function HeaderName({ playList, loading }) {
  return <S.CenterBlockTitle>{loading ? '' : playList}</S.CenterBlockTitle>;
}

export default HeaderName;
