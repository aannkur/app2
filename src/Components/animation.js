import React from 'react'
import animation from "../images/4.gif"
import { Spinner } from 'react-bootstrap'
import "./navbar.css"

export default function Animation() {
  return (
    <div className="wh100 center"style={{alignSelf: 'center', height: '60rem'}} >
      <img src={animation} className="center" style={{alignSelf: 'center'}}></img>
    </div>
  )
}

{/* <Spinner animation="border" variant="primary" className="mt-5 mt7-7" /> */}