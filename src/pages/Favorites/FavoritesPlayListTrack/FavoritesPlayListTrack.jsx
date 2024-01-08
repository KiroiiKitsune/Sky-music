import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  addActiveTrack,
  addFavoriteTracks,
  addPlayTrack,
} from '../../../store/actions/creators/creators';
import {
  activeTrackSelector,
  favoritesTracksSelector,
  playTrackSelector,
} from '../../../store/selectors/selectors';
import formatTime from '../../../components/Helper/Helper';
import { disLike, getFavoriteTracks, refreshToken } from '../../../api/Api';
import { TrackPlaySvg } from '../../../utils/iconSVG/trackPlay';
import { PlaylistLike } from '../../../iconSVG/playlistLike';
import * as S from './styles';

export default function FavoritesPlayListTrack({ loading, getError }) {
  const [disabled, setDisabled] = useState(false);
  const favoritesTracks = useSelector(favoritesTracksSelector);
  const playTrack = useSelector(playTrackSelector);
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();
  const tokenRefresh = JSON.parse(localStorage.getItem('tokenRefresh'));
  const tokenAccess = JSON.parse(localStorage.getItem('tokenAccess'));

  const toggleTrack = (track) => {
    dispatch(
      addActiveTrack({
        ...activeTrack,
        playList: 'favoriteTracks',
        active: true,
        idTrack: track.id,
      }),
    );
    dispatch(addPlayTrack(track));
  };

  const toggleLike = async (track) => {
    try {
      setDisabled(true);
      await disLike({ token: tokenAccess, id: track.id });
      const response = await getFavoriteTracks(tokenAccess);
      dispatch(addFavoriteTracks(response));
    } catch (error) {
      if (error.message === 'Токен протух') {
        const newAccess = await refreshToken(tokenRefresh);
        localStorage.setItem('tokenAccess', JSON.stringify(newAccess));
        await disLike({ token: newAccess.access, id: track.id });
        const response = await getFavoriteTracks(newAccess.access);
        dispatch(addFavoriteTracks(response));
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

  if (!favoritesTracks[0]) {
    return (
      <S.ContentPlaylist>
        <S.PlayListItem>
          <S.PlayListTrack>
            <S.Error>В этом плейлисте нет треков</S.Error>
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
          : favoritesTracks.map((track) => (
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
                    <PlaylistLike />
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
