import './input.css';
import { useState } from "react";
import cls from "classnames";
import IconSearch from './../IconSearch'
function Input({ type = "text", label,className,icon=<IconSearch />,error,...restProps }) {
  const [localType, setLocalType] = useState(type);
  function handleToggleShowPwd() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }
  const classesIconPwd = cls("toggle-password", {
    "ion-eye": localType === "password",
    "ion-eye-disabled": localType === "text",
  });
  const classesSearch =cls('input-search__input',className)
  if (type === "search") {
    return (
      <div className="input-search">
      {icon}
        <input
          className={classesSearch}
          type={localType}
          {...restProps} 
        />
      </div>
    );
  }
  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      {type === "password" && (
        <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>
      )}
      <input type={localType} className={className} {...restProps} />
      {error && <span className="form-control_error">{error}</span>}
    </div>
  );
}

export default Input;
