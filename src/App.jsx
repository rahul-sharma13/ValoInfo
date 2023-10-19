import React from 'react';
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import Matches from './Routes/Matches'
import { Home, Account, Leaderboard, SignIn, SignUp } from './Routes';
import AgentPage from './components/AgentPage'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './components/Footer'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/:uuid" element={<AgentPage />}>
            <Route path=":uuid" />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
