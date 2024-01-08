import React from 'react';
import * as S from './styles';
import formatTime from '../../Helper/Helper';

function PlayerProgress({ value, duration, onInputChange }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <>
      <S.PlayerProgressInput
        type='range'
        id='progress'
        min={0}
        max={duration}
        value={value}
        step={0.01}
        onChange={handleChange}
      />
      <S.BarTime>
        {formatTime(Math.floor(value))} / {formatTime(Math.floor(duration))}
      </S.BarTime>
    </>
  );
}

export default PlayerProgress;
