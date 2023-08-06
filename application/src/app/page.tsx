'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Login, Registration, Dashboard } from './components'
import { useContext, useEffect, useState } from 'react'
import { UserApiContext } from './context/UserApiContext'

const Home = () => {
  const { showLogin, isLoggedIn, setIsLoggedIn, } = useContext(UserApiContext);
  const [userStatus, setUserStatus] = useState<Boolean>();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData')!!);
    if (data) {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }
  }, [isLoggedIn])

  if (userStatus == undefined) {
    return <>

    </>
  }


  return (
    <>
      {(showLogin && !userStatus) && <Login />}
      {(!showLogin && !userStatus) && <Registration />}
      {userStatus && <Dashboard />}
    </>)
}

export default Home;