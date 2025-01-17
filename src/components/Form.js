import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Henry'
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    
    setFormData({
      ...formData,
      [name] : value,
    })
  }

  return (
    <form>
      <input type="text" onChange={handleChange} value={formData.firstName} name="firstName"/>
      <input type="text" onChange={handleChange} value={formData.lastName} name="lastName"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
