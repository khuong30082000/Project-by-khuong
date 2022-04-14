import './login.css'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { Link }  from "react-router-dom";
import { useState } from 'react';
function LoginPage() {
  const [formData,setFormData] =useState({
    username : {
      value:'',
      error:''
    }
  })
  return (
    <main className="login">
    <div className="spacing" />
    <div className="tcl-container">
      <div className="tcl-row">
        <div className="tcl-col-12 tcl-col-sm-6 block-center">
          <h1 className="form-title text-center">Login</h1>
          <div className="form-login-register">
            <form action>
              <Input label="username" placeholder="Enter User ..."/>
              <Input label="password" type="password" placeholder="Enter Password ..."/>
              <div className="d-flex tcl-jc-between tcl-ais-center">
              <Button type="primary" size="large"> Submit</Button>
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
