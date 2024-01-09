import { useState } from 'react';
import sprite from '../../../img/icon/sprite.svg';
import * as S from './styles';

function BarVolume({ audioRef }) {
  const [volume, setVolume] = useState('0.5');
  const [muted, setMuted] = useState(false);

  const changeVolume = (e) => {
    const value = e.target.value;
    setVolume(value);
    audioRef.current.volume = parseFloat(value);
    if (value === '0') {
      setMuted(true);
    } else {
      setMuted(false);
    }
  };

  const toggleMute = () => {
    if (muted) {
      setVolume(volume);
      audioRef.current.volume = parseFloat(volume);
      setMuted(false);
    } else {
      setVolume('0');
      audioRef.current.volume = 0;
      setMuted(true);
    }
  };

  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt='volume' onClick={toggleMute}>
            <use xlinkHref={`${sprite}#icon-volume`} />
          </S.VolumeSvg>
          {muted && <S.MutedText>&#10060;</S.MutedText>}
        </S.VolumeImage>
        <S.VolumeProgress>
        <S.VolumeProgressLine
            onChange={changeVolume}
            type='range'
            id='volume'
            min='0'
            max='1'
            value={volume}
            step='0.01'
          />{' '}
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
}

export default BarVolume;
