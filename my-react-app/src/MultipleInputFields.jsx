import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  // Array destructuring to create an empty object to hold the values
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    // name & value is an attribute of the input fields in the form
    const name = e.target.name;
    const value = e.target.value;
    // take any previous values from the object, and add a new key-value pair for the current thing that has a change to handle
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        // value is held on the object from useState
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
  <MyForm />
);
