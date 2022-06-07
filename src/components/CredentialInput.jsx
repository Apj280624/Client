import React, { useState } from "react";
import styles from "../css/credential-input.module.css";

function CredentialInput(props) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(evt) {
    // console.log(evt.target.value);
    setInputValue(evt.target.value);
    // props ka function call krke udhr ki state ki value bdlo
    // console.log(props.name + evt.target.name);
    props.onChange({ [props.name]: evt.target.value });
  }

  return (
    <input
      className={styles.credentialInput}
      type={props.type}
      placeholder={props.placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default CredentialInput;
