'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Login, Registration, Dashboard } from './components'
import { useContext } from 'react'
import { LoginContext } from './context/LoginContext'

const Home = () => {
  const { showLogin, isLoading, isLoggedIn } = useContext(LoginContext)


  return (
    <>
      {(showLogin && !isLoggedIn) && <Login />}
      {(!showLogin && !isLoggedIn) && <Registration />}
      {isLoggedIn && <Dashboard />}
    </>)
}

export default Home;