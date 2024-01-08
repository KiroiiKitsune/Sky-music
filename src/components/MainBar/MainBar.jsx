import { useRef, useState, useEffect } from 'react';
import PlayerProgress from './playerProgress';
import PlayerBlock from './playerBlock';
import * as S from './styles';

function MainBar({ playTrack }) {
  const audioRef = useRef(null);
  const [repeat, setRepeat] = useState(false);
  const [value, setValue] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      const onLoadedMetadata = () => setDuration(audio.duration);
      const onTimeUpdate = () => setValue(audio.currentTime);

      audio.addEventListener('loadedmetadata', onLoadedMetadata);
      audio.addEventListener('timeupdate', onTimeUpdate);

      return () => {
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        audio.removeEventListener('timeupdate', onTimeUpdate);
      };
    }
  }, []);

  const handleInputChange = (newValue) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
      setValue(newValue);
    }
  };

  return (
    <S.Bar>
      <S.BarContent>
        <audio
          ref={audioRef}
          src={playTrack ? playTrack.track_file : null}
          autoPlay
          loop={repeat}
        />
        <PlayerProgress
          value={value}
          duration={duration}
          onInputChange={handleInputChange}
        />
        <PlayerBlock
          repeat={repeat}
          setRepeat={setRepeat}
          audioRef={audioRef}
        />
      </S.BarContent>
    </S.Bar>
  );
}

export default MainBar;
