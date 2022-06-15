import React, { useRef, useEffect } from "react";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const login = async () => {
    const { email, password } = getInputs();
    if (isUserCredentialsValid(email, password)) {
      alert(`Welcome ${email}`);
    } else {
      alert(`Your email or password is not correct`);
    }
    resetForm();
  };

  const getInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return { email, password };
  };

  const isUserCredentialsValid = (email, password) => {
    return email === "admin@codecourses.site" && password === "123456";
  };

  const resetForm = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="login__container">
      <div className="login__welcome">
        <p>
          <span style={{ color: "#0B65C2", fontWeight: "bold" }}>
            React Ref - Code Courses
          </span>{" "}
        </p>
      </div>
      <div className="login__form-container">
        <div className="login__form">
          <input
            type="text"
            placeholder="Email or phone number"
            ref={emailRef}
          />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button className="login__submit-btn" onClick={login}>
            Login
          </button>
          <span className="login__signup">Create New Account</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
