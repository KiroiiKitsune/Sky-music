import { GlobalStyle } from '../../styles/global';
import { Nav } from '../../components/Nav';
import { Search } from '../../components/Search';
import { MainSidebar } from '../../components/MainSidebar';
import { Player } from '../../components/Player';
import * as S from './styles';

export const Favourites = ({
  music,
  isLoading,
  pause,
  setPause,
  isPlaying,
  setIsPlaying,
  currentTrack,
  setCurrentTrack
}) => {
  return (
    <>
      <S.Lay>
        <GlobalStyle />
        <S.FavouritePlayList>
          <Nav />
          <S.CenterBlock >
            <Search />
            <S.ComponentHeader>Мои треки</S.ComponentHeader>
          </S.CenterBlock>
          <MainSidebar isLoading={isLoading}/>
        </S.FavouritePlayList>
        <Player
          pause={pause}
          setPause={setPause}
          music={music}
          isLoading={isLoading}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
        />
      </S.Lay>
    </>
  );
};
