import { useState } from "react";
import React from "react";

const Form = () => {
  const initailData = {
    name: "",
    email: "",
    country: "USA",
    status: ""
  };
  const [state, setState] = useState(initailData);

  const handleAdd = (e) => {
    const { value, name, type, checked } = e.target;

    const valuetoupdate = type === "checkbox" ? checked : value;

    setState({ ...state, [name]: valuetoupdate });
  };

  return (
    <>
      <div>
        <input
          onChange={handleAdd}
          type="text"
          name="name"
          placeholder="Enter name"
        />
      </div>
      <div>
        <input
          onChange={handleAdd}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </div>
      <div>
        <select
          name="country"
          onChange={handleAdd}
          defaultValue={state.country}
          value={state.country}
        >
          <option key="India">India</option>
          <option key="USA">USA</option>
        </select>
      </div>
      <div>
        <input
          checked={state.status}
          type="checkbox"
          name="status"
          onChange={handleAdd}
        />
        <label>Currently Worked</label>
      </div>
      <ul>
        <li>name:{state.name}</li>
        <li>email:{state.email}</li>
        <li>country:{state.country}</li>
        <li>status:{state.status}</li>
      </ul>
    </>
  );
};

export default Form;
