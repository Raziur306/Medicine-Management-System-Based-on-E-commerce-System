'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Login, Registration } from './components'
import { useContext } from 'react'
import { LoginContext } from './context/LoginContext'

const Home = () => {
  const { showLogin, setShowLogin, isLoading } = useContext(LoginContext)


  return (
    <>
      {showLogin && <Login />}
      {!showLogin && <Registration />}
    </>)
}

export default Home;