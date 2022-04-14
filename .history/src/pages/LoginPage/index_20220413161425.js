import "./login.css";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
function LoginPage() {
  const [formData, setFormData] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });
  function validateFormData({ name, value }) {
    let error = "";
    if (name === "username" && !value) {
      error = "User name không duoc rỗng";
    }
    if (name === "password") {
      if (!value) error = "Password khong duoc rỗng";
      else if (value.length < 6) error = "Password phải có it nhất 6 ký tự";
    }
    return error;
  }
  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const error = validateFormData({ name, value });
    setFormData({
      ...formData,
      [name]: {
        value,
        error,
      },
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = 

    if(!isValid) {
      console.log('form Error')        
      return 
    }

    console.log('submit thanh cong')
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form onClick={handleSubmit}>
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
                  label="password"
                  type="password"
                  placeholder="Enter Password ..."
                  value={formData.password.value}
                  onChange={handleOnChange}
                  name="password"
                  error={formData.password.error}
                  isShowError
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    {" "}
                    Submit
                  </Button>
                  <Link to="/register">Register</Link>
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

export default LoginPage;
