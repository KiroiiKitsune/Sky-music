import { useSelector } from 'react-redux';
import { playTrackSelector } from '../../../store/selectors/selectors';
import { TrackPlaySvg } from '../../../utils/iconSVG/trackPlay';
import TrackLikeDis from '../trackLikeDis';
import * as S from './styles';

function TrackPlay() {
  const playTrack = useSelector(playTrackSelector);

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImg>
          <TrackPlaySvg />
        </S.TrackPlayImg>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink>{playTrack.name}</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink>
            {playTrack.author === '-' ? 'Неизвестный' : playTrack.author}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <TrackLikeDis />
    </S.PlayerTrackPlay>
  );
}

export default TrackPlay;
