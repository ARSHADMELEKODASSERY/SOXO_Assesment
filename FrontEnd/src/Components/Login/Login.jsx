import React,{useState} from 'react';


const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const validate = Yup.object({
    username: Yup.string()
      .matches(regEx, "Email is not valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    // .min(6, "Password must be at least 6 characters long"),
  });

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div>
    <div className="d-flex justify-content-center align-items-center">
        <Card className="login_body" style={{ width: "28rem", height: "500px" }}>
          <Formik
            initialValues={{
              password: "",
              username: "",
              role: ''
            }}
            validationSchema={validate}
            onSubmit={(value) => {
              props.logins(value);
            }}
          >
            {(formik) => (
              <div>
                <div>
                  <Form className="login_form1">
                    <div>
                      <p className="login ">Log in</p>
                    </div>
                    <div>
                      <TextField
                        placeholder="Enter Your Email Address"
                        name="username"
                        type="text"
                        onKeyDown={(e) => {
                          if (e.key === " ") {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>

                    <div>
                      <div style={{ position: "relative" }}>
                        <TextField
                          placeholder="Password"
                          name="password"
                          type={passwordType}
                          {...formik.getFieldProps("password")}
                          errormessage={true}
                          onKeyDown={(e) => {
                            if (e.key === " ") {
                              e.preventDefault();
                            }
                          }}
                        />
                        <span
                          className="pswd-lgn-icon"
                          onClick={togglePassword}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "68%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                        >
                          {passwordType === "password" ? (
                            <i
                              className="fa fa-eye-slash"
                              aria-hidden="true"
                            ></i>
                          ) : (
                            <i className="fa fa-eye" aria-hidden="true"></i>
                          )}
                        </span>
                      </div>
                      <ErrorMessage
                        component="div"
                        name="password"
                        className="errStyle"
                      />
                    </div>

                    <Button type="submit" className="btn_clr1">
                      Login
                    </Button>

                    {loginError && loginError && (
                      <p className="errStyle" name="error" id="error">
                        Invalid User name or Password
                      </p>
                    )}
                  </Form>
                </div>
              </div>
            )}
          </Formik>

          
          <div className="bottom-login mt-3">
            <div className="d-flex justify-content-center sigg" style={{marginTop:"10px"}}>
              <p style={{textAlign:"center",marginTop:"8px"}}>
                Don't have an account?{" "}
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <a href="{''}" className="sign-text text-primary fw-bold">
                    Sign Up
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login;
