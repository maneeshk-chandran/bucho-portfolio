import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";

function Contacts() {
  const [listContacts] = useState([
    {
      title: "Phone Number",
      value: "+91 8089330021",
    },
    {
      title: "Email",
      value: "vipindev86@gmail.com",
    },
    {
      title: "Instagram",
      value: "@vipin_aries_",
    },
    {
      title: "Follow us on:",
      value: "@bucho_meat",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  

  return (
    <section className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact Me
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Keep in Touch 
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => {
        const isInstagram = value.title === "Instagram";
        const isBucho = value.title === "Follow us on:";
        const link = isInstagram
          ? "https://instagram.com/vipin_aries_"
          : isBucho
          ? "https://instagram.com/bucho_meat"
          : null;
          return(

          <div className="item" key={key}>
            <h3>{value.title}</h3>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {value.value}
        </a>
      ) : (
        <div>{value.value}</div>
      )}
            {/* <h3>{value.title}</h3>
            <div>{value.value}</div> */}
          </div>
        );
})}
      </div>
    </section>
  );
}
export default Contacts;
