import "./LoginPage/login.css";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateFormRegister } from "../../helpers";
function RegisterPage() {
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nickname: {
      value: "",
      error: "",
    },
    username: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });
  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value.trim();
    const error = validateFormRegister({ name, value });

    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });
    setIsFormDirty(true);
  }
  function checkFormIsValid() {
    if (!isFormDirty) {
      setFormData({
        nickname: {
          value: "",
          error: validateFormRegister({
            value: "",
            name: "nickname",
          }),
        },
        username: {
          value: "",
          error: validateFormRegister({
            value: "",
            name: "username",
          }),
        },
        password: {
          value: "",
          error: validateFormRegister({
            value: "",
            name: "password",
          }),
        },
      });
      return false;
    }
    if (formData.username.error || formData.password.error) {
      return false;
    }
    return true;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = checkFormIsValid();

    if (!isValid) {
      console.log("form Error..");
      return;
    }
    const { username, password } = formData;
    if (loading) {
      return;
    }
    setLoading(true);
    setFormError("");

    dispatch(loginAsync(username.value, password.value)).then((res) => {
      if (res.ok) {
        console.log("thanh cong", res);
        history.push("/");
      } else {
        console.log("Error", res.error);
        setFormError(res.error);
      }
      setLoading(false);
    });
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="nickname"
                  placeholder="Enter Nickname  ..."
                  value={formData.nickname.value}
                  onChange={handleOnChange}
                  name="nickname"
                  error={formData.nickname.error}
                  isShowError
                />
                <Input
                  label="username"
                  placeholder="Enter User ..."
                  value={formData.username.value}
                  onChange={handleOnChange}
                  name="username"
                  error={formData.username.error}
                  isShowError
                />
                <Input
                  label="email"
                  type="email"
                  placeholder="Enter Email..."
                  value={formData.email.value}
                  onChange={handleOnChange}
                  name="username"
                  error={formData.email.error}
                  isShowError
                />
                <Input
                  label="password"
                  type="password"
                  placeholder="Enter Password ..."
                  value={formData.password.value}
                  onChange={handleOnChange}
                  name="username"
                  error={formData.password.error}
                  isShowError
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Submit
                  </Button>
                  <Link to="/login">Bạn đả có tài khoản ?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default RegisterPage;
