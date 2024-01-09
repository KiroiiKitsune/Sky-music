import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeTrackSelector } from '../../../store/selectors/selectors';
import {
  addActiveTrack,
  addNextOrPrevTrack,
  addShuffleTracks,
} from '../../../store/actions/creators/creators';
import { PlayerBtnPrevSvg } from '../../../iconSVG/playerBtnPrev';
import { PlayerBtnPlaySvg } from '../../../utils/iconSVG/playerBtnPlay';
import { PlayerBtnPauseSvg } from '../../../utils/iconSVG/playerBtnPause';
import { PlayerBtnNextSvg } from '../../../utils/iconSVG/playerBtnNext';
import { PlayerBtnRepeatSvg } from '../../../iconSVG/playerBtnRepeat';
import { PlayerBtnShuffleSvg } from '../../../utils/iconSVG/playerBtnShuffle';
import * as S from './styles';

function PlayerControls({ audioRef, repeat, setRepeat }) {
  const activeTrack = useSelector(activeTrackSelector);
  const dispatch = useDispatch();

  const [isLoop, setIsLoop] = useState(false);
  const [shuffleTrackEnabled, setShuffleTrackEnabled] = useState(false);

  const audioControl = (text) => {
    switch (text) {
      case 'prev':
        if (audioRef.current.currentTime >= 5) {
          audioRef.current.currentTime = 0;
          return;
        }
        dispatch(addNextOrPrevTrack('prev'));
        break;
      case 'play':
        audioRef.current.play();
        dispatch(addActiveTrack({ ...activeTrack, active: true }));
        break;
      case 'stop':
        audioRef.current.pause();
        dispatch(addActiveTrack({ ...activeTrack, active: false }));
        break;
      case 'next':
        dispatch(addNextOrPrevTrack('next'));
        break;
      case 'repeat':
        setRepeat(!repeat);
        break;
      case 'shuffle':
        dispatch(addShuffleTracks());
        setShuffleTrackEnabled(!shuffleTrackEnabled);
        break;
      default:
        break;
    }
  };

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev
        onClick={() => {
          audioControl('prev');
        }}
        type='button'
      >
        <PlayerBtnPrevSvg alt='Предыдущий трек' />
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay
        onClick={() => {
          audioControl(activeTrack.active ? 'stop' : 'play');
        }}
        type='button'
      >
        <S.PlayerBtnPlay
          onClick={() => {
            audioControl(activeTrack.active ? 'stop' : 'play');
          }}
          type='button'
        >
          {activeTrack.active ? (
            <PlayerBtnPauseSvg alt='Пауза' />
          ) : (
            <PlayerBtnPlaySvg alt='Играть' />
          )}
        </S.PlayerBtnPlay>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext
        onClick={() => {
          audioControl('next');
        }}
        type='button'
      >
        <PlayerBtnNextSvg alt='Следующий трек' />
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat
        onClick={() => {
          audioControl('repeat');
        }}
        type='button'
      >
        <PlayerBtnRepeatSvg repeat={repeat} alt='Повтор'></PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle
        onClick={() => {
          audioControl('shuffle');
        }}
        type='button'
      >
        <PlayerBtnShuffleSvg
          shuffleTrackEnable={shuffleTrackEnabled}
          alt='Случайный порядок'
        ></PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}
export default PlayerControls;
