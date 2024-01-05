import React, { useState } from 'react'
import TripList from './components/TripList'

export default function App() {
  const [hide, setHide] = useState(true)
  return (

    <div>
      <button onClick={()=>{
        setHide((prev) => !prev)
      }}> Hide</button>
     { hide && <TripList />}


    </div>
  )
}
