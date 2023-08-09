import React from 'react'

const Logo = () => {
  return (
    <div className='logo' style={{display:"flex",textTransform:"uppercase",padding:"0.2rem",border:"4px solid black",alignItems:"center",justifyContent:"center"}}>
        <p style={{background:"white",width:"60%",fontWeight:"bold",color:"purple",textAlign:"center",fontFamily:"sans-serif"}}>Siddharth</p>
        <p style={{padding:"0.5rem",background:"purple",color:"white",width:"40%",fontFamily:"cursive",textAlign:"center"}}>Store</p>
    </div>
  )
}

export default Logo