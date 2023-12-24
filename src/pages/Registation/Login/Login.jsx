import "./Login.css";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
 
  return (
    <>
      
      <div className="login_container">
        <div className="login_flex">
          <h1>facebook</h1>
          <div className="form_flex">
            <form>
              <div className="name_content">
                <h4 className="login_text">Log in to Facebook</h4>
              </div>
              <input placeholder="Email address or phone number" type="text" />
              <input placeholder="Password" type="password" name="" id="" />
              <button className="loginBtn">Log in</button>
             <div className="link">
             <Link>Forgotten account?</Link>
             <Link to="/signup">Sign up for Facebook</Link>
             </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
