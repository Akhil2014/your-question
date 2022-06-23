import React from "react";
import { useState } from "react";

import "../App.css";

const QueryForm = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    message: "",
  });

  let name, value;
  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const {name , lastName , message} = user;

    if(name && lastName && message){

        const res = await fetch(
            "https://queryform-9ff37-default-rtdb.firebaseio.com/queryform.json", 
            {
              method:"POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ 
                  name,
                  lastName,
                  message,
              })
            }
          );
      
          if(res){
              setUser({
                  name: "",
                  lastName: "",
                  message: "",
                }); 
      
                alert("Thank you!")
          }
        }else{
        alert("Please Fill the Data")
    }
}

   
  return (
    <div>
      <form onSubmit={sendData} method="POST">
        <input
          type="text"
          id="fname"
          name="name"
          value={user.name}
          onChange={getUserdata}
          placeholder="Your name.."
          autoComplete="off"
        />
        <input
          type="text"
          id="lname"
          name="lastName"
          value={user.lastName}
          onChange={getUserdata}
          placeholder="Your last name.."
          autoComplete="off"
        />

        <input
          type="text"
          id="subject"
          name="message"
          value={user.message}
          onChange={getUserdata}
          placeholder="Write something.."
          autoComplete="off"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default QueryForm;
