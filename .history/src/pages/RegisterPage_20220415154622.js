import "./LoginPage/login.css";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
function RegisterPage() {
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
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form action>
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
