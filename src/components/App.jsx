import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import {Actors, HomeMovies, MovieInformation, NavigationBar, Profile} from './'

const App = () => {
  return (
    <div>
        <CssBaseline />
        <NavigationBar />
        <main>
            <Routes>
                <Route path="/" element={<HomeMovies></HomeMovies>} />
                <Route path="/movies/:id" element={<MovieInformation></MovieInformation>} />
                <Route path="/actors/:id" element={<Actors></Actors>} />
                <Route path="/profile/:id" element={<Profile></Profile>} />
            </Routes>
        </main>
    </div>
  )
}

export default App