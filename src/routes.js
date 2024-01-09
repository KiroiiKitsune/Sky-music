import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { LogPage } from './pages/logPage';
import { RegPage } from './pages/regPage';
import { Main } from './pages/main';
import { Favourites } from './pages/favourites';
import { Category } from './pages/category';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './components/ProtectedRoute';

export const AppRoutes = ({
  user,
  onAuthButtonClick,
  isLoading,
  music,
  currentTrack,
  setCurrentTrack,
  error,
}) => {
  const [pause, setPause] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route
          path='/'
          element={
            <Main
              pause={pause}
              setPause={setPause}
              isLoading={isLoading}
              music={music}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
              error={error}
            />
          }
        />
        <Route
          path='/favourites'
          element={
            <Favourites
              pause={pause}
              setPause={setPause}
              music={music}
              isLoading={isLoading}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrack={currentTrack}
              setCurrentTrack={setCurrentTrack}
            />
          }
        />
        <Route path='/category/:id' element={<Category />} />
      </Route>
      <Route path='/register' element={<RegPage />} />
      <Route
        path='/login'
        element={<LogPage onAuthButtonClick={onAuthButtonClick} />}
      />
      <Route path='*' element={<NotFound isLoading={isLoading} />} />
    </Routes>
  );
};
