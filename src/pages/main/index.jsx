import { useState } from 'react';
import { NavTrackSidebar } from '../../components/NavTrackSidebar';
import { Player } from '../../components/Player';
import { Footer } from '../../components/Footer';
import * as S from './styles';

export const Main = ({
  isPlaying,
  setIsPlaying,
  isLoading,
  music,
  error,
  currentTrack,
  setCurrentTrack,
  pause,
  setPause
}) => {

  const [isBar, setIsBar] = useState(false);
  
  return (
    <S.Wrapper>
      <S.Container>
        <NavTrackSidebar
          pause={pause}
          isLoading={isLoading}
          music={music}
          setIsPlaying={setIsPlaying}
          setIsBar={setIsBar}
          error={error}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
        {isBar && (
          <Player
            setPause={setPause}
            music={music}
            isLoading={isLoading}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        )}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
