import React from 'react'

const Logo = () => {
  return (
    <div className='logo' style={{backgroundColor:"white",display:"flex",width:"200px",padding:"0.2rem",border:"2px solid black",alignItems:"center",justifyContent:"center"}}>
        <p style={{background:"white",width:"60%",color:"purple",textAlign:"center",fontFamily:"sans-serif",textTransform:"capitalize"}}>Siddharth's</p>
        <p style={{padding:"0.5rem",background:"purple",color:"white",width:"40%",fontFamily:"cursive",textAlign:"center"}}>Store</p>
    </div>
  )
}

export default Logo