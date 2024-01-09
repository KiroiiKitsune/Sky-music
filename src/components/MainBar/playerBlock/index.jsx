import PlayerControls from "../playerControls";
import TrackPlay from "../trackPlay";
import BarVolume from "../barVolume";
import * as S from './styles';

function PlayerBlock({
  audioRef,
  setRepeat,
  repeat,
}) {
  return (
    <S.BarPlayerBlock>
      <S.BarPlayer>
        <PlayerControls
          repeat={repeat}
          setRepeat={setRepeat}
          audioRef={audioRef}
        />
        <TrackPlay />
      </S.BarPlayer>
      <BarVolume audioRef={audioRef} />
    </S.BarPlayerBlock>
  );
}

export default PlayerBlock;
