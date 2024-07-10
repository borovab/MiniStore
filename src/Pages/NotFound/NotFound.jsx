import React from 'react'

const NotFound = () => {
  const style = {
    display:"flex",
    justifyContent:"center",
    alignItems: "center", 
    fontSize: "30px",
    textAlign: "center" 
  };
  return (
    <div style={style}>Page not found on this website try again.</div>
  )
}

export default NotFound