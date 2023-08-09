import React from "react";
import { questions } from "./QuestionsList";
import { useState } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const [data, setData] = useState(questions);
  return (
    <section className="main-div" style={{width:"500px",display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center",padding:"4rem 2.5rem",boxShadow: "0 0 10px #000",borderRadius:"20px"}}>
      <h1 style={{marginBottom:"1rem"}}>FAQ </h1>
      {data.map((current) => {
        const { id } = current;
        return <Accordion key={id} {...current} />;
      })}
    </section>
  );
};

export default FAQ;
