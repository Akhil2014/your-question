import React from "react";

import "../App.css";

const QueryForm = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          autoComplete="off"
        />
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          autoComplete="off"
        />

        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input
        type= "text"
          id="subject"
          name="subject"
          placeholder="Write something.."
          autoComplete="off"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default QueryForm;
