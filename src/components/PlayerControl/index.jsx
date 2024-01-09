import { useState, useEffect } from 'react';
import { getTrackById } from '../../api/apiGetTracks';
import {
  nextTrack,
  prevTrack,
  toggleShuffled,
} from '../../store/actions/creators/track';
import { useDispatch } from 'react-redux';
import { PlayerBtnPrevSvg } from '../../utils/iconSVG/playerBtnPrev';
import { PlayerBtnPlaySvg } from '../../utils/iconSVG/playerBtnPlay';
import { PlayerBtnPauseSvg } from '../../utils/iconSVG/playerBtnPause';
import { PlayerBtnNextSvg } from '../../utils/iconSVG/playerBtnNext';
import { PlayerBtnRepeatSvg } from '../../utils/iconSVG/playerBtnRepeat';
import { PlayerBtnShuffleSvg } from '../../utils/iconSVG/playerBtnShuffle';
import * as S from './styles';

export const PlayerControls = ({
  music,
  currentTrack,
  setCurrentTrack,
  trackId,
  isPlaying,
  setIsPlaying,
  setCurrentTime,
  setDuration,
  audioRef,
  volume,
  setPause,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledTracks, setShuffledTracks] = useState([]);
  const [shuffledIndex, setShuffledIndex] = useState(0);
  const [shuffleTrackEnable, setShuffleTrackEnable] = useState(false);

  const handleStart = () => {
    if (loaded) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (loaded) {
      handleStart();
    }
  }, [loaded]);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const track = await getTrackById(trackId);
        setCurrentTrack(track);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTrack();
  }, [trackId]);

  useEffect(() => {
    setLoaded(false);
  }, [currentTrack.track_file]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack.track_file, audioRef]);

  const toggleLoop = () => {
    setIsLoop(!isLoop);
  };

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [currentTrack.track_file, audioRef, volume]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleNextTrack = () => {
    let nextIndex;

    if (shuffleTrackEnable) {
      if (shuffledIndex === shuffledTracks.length - 1) {
        setIsPlaying(false);
        audioRef.current.pause();
        return;
      }
      nextIndex = (shuffledIndex + 1) % shuffledTracks.length;
      setShuffledIndex(nextIndex);
    } else {
      if (currentIndex === music.length - 1) {
        setIsPlaying(false);
        audioRef.current.pause();
        return;
      }
      nextIndex = (currentIndex + 1) % music.length;
      setCurrentIndex(nextIndex);
    }

    const nextMusic = shuffleTrackEnable
      ? shuffledTracks[nextIndex]
      : music[nextIndex];
    setCurrentTrack(nextMusic);

    dispatch(nextTrack(nextMusic));
    setLoaded(false);
  };

  const shuffleTracks = () => {
    const shuffledMusic = [...music];
    for (let i = shuffledMusic.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMusic[i], shuffledMusic[j]] = [
        shuffledMusic[j],
        shuffledMusic[i],
      ];
    }
    return shuffledMusic;
  };

  useEffect(() => {
    if (shuffleTrackEnable) {
      const newShuffledTracks = shuffleTracks();
      setShuffledTracks(newShuffledTracks);
      setShuffledIndex(0);
    } else {
      setShuffledTracks([]);
    }
  }, [shuffleTrackEnable]);

  useEffect(() => {
    setPause(!isPlaying);
  }, [isPlaying, setPause]);

  const handleShuffle = () => {
    if (!shuffleTrackEnable) {
      setShuffleTrackEnable(true);
      const newShuffledTracks = shuffleTracks();
      setShuffledTracks(newShuffledTracks);
      setShuffledIndex(0);
      dispatch(toggleShuffled(newShuffledTracks, true));
    } else {
      setShuffleTrackEnable(false);
      setShuffledTracks([]);
      dispatch(toggleShuffled([], false));
    }
  };

  const handlePrevTrack = () => {
    if (audioRef.current.currentTime > 5) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    let prevIndex;

    if (shuffleTrackEnable) {
      if (shuffledIndex === 0) {
        setIsPlaying(false);
        audioRef.current.pause();
        return;
      }
      prevIndex =
        (shuffledIndex - 1 + shuffledTracks.length) % shuffledTracks.length;
      setShuffledIndex(prevIndex);
    } else {
      if (currentIndex === 0) {
        setIsPlaying(false);
        audioRef.current.pause();
        setCurrentIndex(music.length - 1);
        return;
      }
      prevIndex = (currentIndex - 1 + music.length) % music.length;
      setCurrentIndex(prevIndex);
    }

    const prevMusic = shuffleTrackEnable
      ? shuffledTracks[prevIndex]
      : music[prevIndex];
    setCurrentTrack(prevMusic);

    dispatch(prevTrack(prevMusic));
    setLoaded(false);
  };

  const handlePlay = () => {
    if (loaded) {
      setIsPlaying(!isPlaying);
    }
    setPause(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.track_file}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop={isLoop}
        onEnded={handleNextTrack}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() => setLoaded(true)}
      ></audio>
      <S.PlayerControls>
        <S.PlayerBtnPrev onClick={handlePrevTrack}>
          <PlayerBtnPrevSvg alt='Предыдущий трек' />
        </S.PlayerBtnPrev>
        <S.PlayerBtnPlay
          onClick={handlePlay}
          pause={isPlaying ? 'false' : undefined}
        >
          {isPlaying ? (
            <PlayerBtnPauseSvg alt='Пауза' />
          ) : (
            <PlayerBtnPlaySvg alt='Играть' />
          )}
        </S.PlayerBtnPlay>
        <S.PlayerBtnNext onClick={handleNextTrack}>
          <PlayerBtnNextSvg alt='Следующий трек' />
        </S.PlayerBtnNext>
        <S.PlayerBtnRepeat onClick={toggleLoop}>
          <PlayerBtnRepeatSvg isLoop={isLoop} alt='Повтор' />
        </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle onClick={handleShuffle}>
          <PlayerBtnShuffleSvg
            shuffleTrackEnable={shuffleTrackEnable}
            alt='Случайный порядок'
          />
        </S.PlayerBtnShuffle>
      </S.PlayerControls>
    </>
  );
};
