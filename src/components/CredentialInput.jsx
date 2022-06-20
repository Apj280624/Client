import React, { useEffect, useState } from "react";
import styles from "../css/credential-input.module.css";

function CredentialInput(props) {
  var initialValue = "";
  if (props.initialValue) {
    initialValue = props.initialValue;
  }
  const [inputValue, setInputValue] = useState(initialValue);

  function handleChange(evt) {
    // console.log(evt.target.value);
    setInputValue(evt.target.value);
    // props ka function call krke udhr ki state ki value bdlo
    // console.log(props.name + evt.target.name);
    props.onChange({ [props.name]: evt.target.value });
  }

  useEffect(() => {
    if (props.isDone) {
      setInputValue("");
    }
  }, [props.isDone]);

  const inlineStyle = {
    width: props.width,
  };

  return (
    <input
      className={styles.credentialInput}
      style={inlineStyle}
      maxLength={props.maxLength ? props.maxLength : 100}
      type={props.type}
      placeholder={props.placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export default CredentialInput;
