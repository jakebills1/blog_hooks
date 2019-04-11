import { useState, } from 'react';
// basically takes a generic value and returns that value, and onChange
export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => setValue(e.target.value)

  return {
    value, 
    onChange: handleChange,
  }
}