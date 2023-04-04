import React from "react";
import { useState } from "react";
const emptyForm = {
  name: "",
  email: "",
  rol: "",
};

function AddMemberForm(props) {
  const [formData, setFormdata] = useState(emptyForm);

  function submitHandler(e) {
    e.preventDefault();
    props.addMember(formData);
  }

  function changeHandler(e) {
    console.log(e.target.value);
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormdata(newFormData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">İsim:</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          id="name"
          name="name"
          value={formData.name}
        />

        <label htmlFor="email">Eposta:</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="email  "
          id="email"
          name="email"
          value={formData.email}
        />

        <label htmlFor="rol">Rol:</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          id="rol"
          name="rol"
          value={formData.rol}
        />

        <button type="submit">Üye Ekle</button>
      </form>
    </div>
  );
}
export default AddMemberForm;
