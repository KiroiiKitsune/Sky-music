import { useState, useEffect } from 'react';
import { durationFormatter } from '../../utils/durationFormatter';
import * as S from './styles';

export const ProgressBar = ({
  currentTime,
  duration,
  onSeek,
  isPlaying
}) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    if (duration > 0) {
      setProgressPercentage((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  const handleClick = (e) => {
    const progressBarWidth = e.target.clientWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / progressBarWidth) * duration;

    if (onSeek) {
      onSeek(newTime);
    }
  };

  return (
    <>
      <S.Timer>
        <S.TimerData>{durationFormatter(currentTime)}</S.TimerData>
        <S.TimerData> / </S.TimerData>
        <S.TimerData>{durationFormatter(duration)}</S.TimerData>
      </S.Timer>
      <S.ProgressBarWrapper onClick={handleClick} $playing={isPlaying}>
        <S.ProgressBar style={{ width: `${progressPercentage}%` }}/>
      </S.ProgressBarWrapper>
    </>
  );
};
