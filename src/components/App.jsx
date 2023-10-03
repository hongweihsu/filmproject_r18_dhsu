import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import {
  Actors, HomeMovies, MovieInformation, NavigationBar, Profile,
} from '.';

const App = () => {
  const RootClass = styled('div')({
    display: 'flex',
    height: '100%',
  });
  const ContentClass = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });

  return (
    <RootClass>
      <CssBaseline />
      <NavigationBar />
      <main>
        <ContentClass>
          <Routes>
            <Route path="/" element={<HomeMovies />} />
            <Route path="/movies/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </ContentClass>
      </main>
    </RootClass>
  );
};

export default App;
