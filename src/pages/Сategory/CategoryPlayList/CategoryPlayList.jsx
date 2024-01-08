import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import addTracks, {
  addActiveTrack,
  addPlayTrack,
} from '../../../store/actions/creators/creators';
import getTrackAll, { addLike, disLike, refreshToken } from '../../../api/Api';
import {
  activeTrackSelector,
  categoryTracksSelector,
  playTrackSelector,
  userSelector,
} from '../../../store/selectors/selectors';
import formatTime from '../../../components/Helper/Helper';
import { TrackPlaySvg } from '../../../utils/iconSVG/trackPlay';
import { PlaylistLike } from '../../../iconSVG/playlistLike';
import { PlaylistDislike } from '../../../iconSVG/playlistDisLike';
import * as S from './styles';

function CategoryPlayList({ loading, getError }) {
  const categoryPlayList = useSelector(categoryTracksSelector);
  const [disabled, setDisabled] = useState(false);
  const user = useSelector(userSelector);
  const playTrack = useSelector(playTrackSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'));
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'));

  const toggleTrack = (track) => {
    dispatch(
      addActiveTrack({
        ...activeTrack,
        playList: 'categoryPlayList',
        active: true,
        idTrack: track.id,
      }),
    );
    dispatch(addPlayTrack(track));
  };

  const toggleLike = async (track) => {
    try {
      setDisabled(true);
      if (track.stared_user.find((el) => el.id === user.id)) {
        await disLike({ token: tokenAccess, id: track.id });
      } else {
        await addLike({ token: tokenAccess, id: track.id });
      }
      const response = await getTrackAll();
      dispatch(addTracks(response));
    } catch (error) {
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh);
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess));
        if (track.stared_user.find((el) => el.id === user.id)) {
          await disLike({ token: newAccess.access, id: track.id });
        } else {
          await addLike({ token: newAccess.access, id: track.id });
        }
        const response = await getTrackAll();
        dispatch(addTracks(response));
        return;
      }
    } finally {
      setDisabled(false);
    }
  };

  if (getError) {
    return (
      <S.ContentPlaylist>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.Error>{getError}</S.Error>
          </S.PlayListTrack>
        </S.PlayListItem>
      </S.ContentPlaylist>
    );
  }

  return (
    <S.ContentPlaylist>
      <S.PlayListItem>
        {loading
          ? Array(12)
              .fill()
              .map((_, index) => (
                <S.PlayListTrack key={index}>
                  <S.TrackTitleImg>
                    <S.Skeleton w='51px' h='51px' $isLoading={loading} />
                  </S.TrackTitleImg>
                  <S.TitleText>
                    <S.Skeleton w='356px' h='19px' $isLoading={loading} />
                  </S.TitleText>
                  <S.TrackAuthor>
                    <S.Skeleton w='271px' h='19px' $isLoading={loading} />
                  </S.TrackAuthor>
                  <S.TrackAlbum>
                    <S.Skeleton w='305px' h='19px' $isLoading={loading} />
                  </S.TrackAlbum>
                  <S.Time>
                    <S.Skeleton w='60.8px' h='19px' $isLoading={loading} />
                  </S.Time>
                </S.PlayListTrack>
              ))
          : categoryPlayList.map((track) => (
              <S.PlayListTrack key={track.id}>
                <S.TrackTitle>
                  <S.TrackTitleImg>
                    {track.id === playTrack.id ? (
                      <S.TrackStatusIndicator
                        active={activeTrack.active ? 'true' : 'false'}
                      />
                    ) : (
                      <S.TrackPlayImg>
                        <TrackPlaySvg />
                      </S.TrackPlayImg>
                    )}
                  </S.TrackTitleImg>
                  <S.TitleText>
                    <S.TrackTitleLink
                      type='button'
                      onClick={() => toggleTrack(track)}
                    >
                      {track.name} <S.TrackTitleSpan />
                    </S.TrackTitleLink>
                  </S.TitleText>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink
                    type='button'
                    onClick={() => toggleTrack(track)}
                  >
                    {track.author === '-' ? 'Неизвестный' : track.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink
                    type='button'
                    onClick={() => toggleTrack(track)}
                  >
                    {track.album}
                  </S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.Time>
                  <S.TrackButtonLike
                    disabled={disabled}
                    onClick={() => toggleLike(track)}
                    type='button'
                  >
                    {track.stared_user.find((el) => el.id === user.id) ? (
                      <PlaylistLike />
                    ) : (
                      <PlaylistDislike />
                    )}
                  </S.TrackButtonLike>
                  <S.TrackTimeText>
                    {formatTime(track.duration_in_seconds)}
                  </S.TrackTimeText>
                </S.Time>
              </S.PlayListTrack>
            ))}
      </S.PlayListItem>
    </S.ContentPlaylist>
  );
}

export default CategoryPlayList;
