import { useState } from "react";

export default function Box({ message, onInputChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onInputChange(value); // Call the prop function to pass the value back to App
  }

  return (
    <>
      <input
        type="text"
        placeholder={message}
        value={searchText}
        onChange={handleSearchChange}
      ></input>
    </>
  )
}
