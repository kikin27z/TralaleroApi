import React from 'react'
import { useNavigate } from 'react-router';

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div className='notfound-container'>
      <img src="https://loudtechie.com/wp-content/uploads/2017/06/screenshot-www.loudtechie.com-2017-06-27-23-03-46.png" alt="Not Found Zoro" />
      <button onClick={()=> navigate("/")}>
        Volver Inicio
      </button>
    </div>
  )
}

export default NotFound;