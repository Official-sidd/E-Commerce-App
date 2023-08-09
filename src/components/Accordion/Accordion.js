import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main-heading" style={{display:"flex",padding:"1rem",width:"100%",borderRadius:"5px",backgroundColor:"lightgray",alignItems:"center",gap:"1rem"}}>
        <button
          onClick={() => setShow(!show)}
          style={{borderRadius:"50%",border:"none",height: "30px", width: "30px",cursor:"pointer"}}
        >
          {show? "➖": "➕"} 
        </button>
        <h3>{question}</h3>
      </div>
      {show && <p style={{width:"100%",padding:"1rem 2rem",marginTop:"-1.2rem",zIndex:-1,backgroundColor:"whitesmoke",borderRadius:" 0 0 8px 8px"}}>{answer}</p>}
    </>
  );
};

export default Accordion;
