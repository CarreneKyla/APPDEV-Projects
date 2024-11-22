import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Games from './Components/Games'
import Game from './Components/Game'
import NotFound from './Components/NotFound'

export default function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/games">Games</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<Game />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}