import { TrackPlayLikeSvg } from '../../../iconSVG/trackPlayLike';
import { TrackPlayDislikeSvg } from '../../../iconSVG/trackPlayDislike';
import * as S from './styles';

function TrackLikeDis() {
  return (
    <S.TrackPlayLikesDisplay>
      <S.TrackPlayLike>
      <TrackPlayLikeSvg />
      </S.TrackPlayLike>
      <S.TrackPlayDislike>
      <TrackPlayDislikeSvg />
      </S.TrackPlayDislike>
    </S.TrackPlayLikesDisplay>
  );
}

export default TrackLikeDis;
