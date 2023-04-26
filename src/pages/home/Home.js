import React, { useEffect } from 'react'
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem('login')

  useEffect(()=> {
    if(!isLogin){
      navigate('/login')
    }
  },[])
  return (
    <div>
      <h1>Home page</h1>
      <Footer/>
    </div>
  )
}
