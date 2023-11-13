import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  let [disable, setDisable] = useState(false);
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    passwordError: "",
  });

  function validation(event) {
    //title
    if (event.target.name === "name") {
      setUser({ ...user, name: event.target.value });
      setErrors({
        ...errors,
        nameError:
          event.target.value.length === 0 ? "This field is Required" : "",
      });
    } else if (event.target.name === "password") {
      setUser({ ...user, password: event.target.value });
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length === 0 ? "This field is Required" : "",
      });
    }
  }

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      if (user.name && user.password) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    } else {
      setDisable(false);
    }
  }, [errors, user]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.parse(localStorage.getItem("userInfo"));
    console.log(data);
    if (data) {
      if (data.name === user.name && data.password === user.password) {
        setIsLogged(true);
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Check Your username and password",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "If you don't have an account, Create Now",
        showCancelButton: true,
        confirmButtonText: "Register",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/register");
        }
      });
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <Form className="container m-5" onSubmit={handleFormSubmit} autoComplete="off">
      <h3>Login to your account</h3>
      <p>
        In order to use the editing and rating capabilities of TMDB, as well as
        get personal recommendations you will need to login to your account. If
        you do not have an account, registering for an account is free and
        simple.{" "}
        <span
          className="text-primary"
          role="button"
          onClick={() => {
            goToRegister();
          }}
        >
          Click here
        </span>{" "}
        to get started.
      </p>
      <p>
        If you signed up but did not get your verification email,{" "}
        <span className="text-primary" role="button">
          click here
        </span>{" "}
        to have it resent.
      </p>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <input
          type="text"
          className={`form-control shadow-none border-1 ${
            errors.nameError ? "is-invalid" : ""
          }`}
          name="name"
          value={user.name}
          onChange={(e) => validation(e)}
          onBlur={(e) => validation(e)}
        />
        <span className="invalid-feedback text-start">{errors.nameError}</span>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <input
          type="password"
          className={`form-control shadow-none border-1 ${
            errors.passwordError ? "is-invalid" : ""
          }`}
          name="password"
          value={user.password}
          onChange={(e) => validation(e)}
          onBlur={(e) => validation(e)}
        />
        <span className="invalid-feedback text-start">
          {errors.passwordError}
        </span>
      </Form.Group>
      <Form.Group className="my-2">
        <button
          className={`btn bg-aqua text-white fw-bold me-3 px-3 ${
            !disable ? "disable" : "change-pass"
          }`}
          disabled={!disable}
        >
          Login
        </button>
        <span className="text-primary" role="button">
          Reset password
        </span>
      </Form.Group>
    </Form>
  );
}

export default Login;
