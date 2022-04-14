import "./input.css";
import { useState } from "react";
import cls from "classnames";
import IconSearch from "./../IconSearch";
function Input({
  type = "text",
  label,
  className,
  icon = <IconSearch />,
  error,
  isShowError,
  ...restProps
}) {
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
  const classesSearch = cls("input-search__input", className);
  if (type === "search") {
    return (
      <div className="input-search">
        {icon}
        <input className={classesSearch} type={localType} {...restProps} />
      </div>
    );
  }
  return (
    <div
      className={cls("form-control", {
        "form-control__has-error": error,
      })}
    >
      {label && <label>{label}</label>}
      <div className="form-control__input">
        {type === "password" && (
          <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>
        )}
        <input type={localType} className={className} {...restProps} />
      </div>
      {error && <span className="form-control__error">{error}</span>}
    </div>
  );
}

export default Input;
