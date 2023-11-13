import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  let [disable, setDisable] = useState(false);
  const { isLogged, setIsLogged } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    nameError: "",
    passwordError: "",
    confirmPasswordError: "",
    emailError: "",
  });
  const emailRegex = /[a-z0-9]{5,}@[a-z]{3,}\.[a-z]{3,}/;

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
          event.target.value.length === 0
            ? "This field is Required"
            : event.target.value.length >= 4
            ? ""
            : "Use minimum 4 characters",
      });
    } else if (event.target.name === "confirmPassword") {
      setUser({ ...user, confirmPassword: event.target.value });
      setErrors({
        ...errors,
        confirmPasswordError:
          event.target.value.length === 0
            ? "This field is Required"
            : event.target.value === user.password
            ? ""
            : "Passwords don't match",
      });
    } else if (event.target.name === "email") {
      setUser({ ...user, email: event.target.value });
      setErrors({
        ...errors,
        emailError:
          event.target.value.length === 0
            ? "This field is Required"
            : emailRegex.test(event.target.value)
            ? ""
            : "Email Not Valid",
      });
    }
  }

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (!hasErrors) {
      if (user.name && user.password && user.confirmPassword && user.email) {
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

    localStorage.setItem("userInfo",JSON.stringify(user));

    Swal.fire({
      icon: "success",
      title: "Account Created",
      text: "You can Log in now",
      showCancelButton: true,
      confirmButtonText: "Log in",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
    
    setUser({
      nameError: "",
      PasswordError: "",
      confirmPasswordError: "",
      emailError: "",
    });
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <Container className="f-width">
      <Row className="m-4">
        <Col className="border rounded bg-aqua p-0 side-menu">
          <h5 className="text-white m-0 p-3 fw-bold">
            Benefits of being a member
          </h5>
          <div className="bg-white list">
            <p>
              <i className="fa-solid fa-check"></i> Find something to watch on
              your subscribed streaming services
            </p>
            <p>
              <i className="fa-solid fa-check"></i> Log the movies and TV shows
              you have watched
            </p>
            <p>
              <i className="fa-solid fa-check"></i> Keep track of your Favorite
              movies and TV shows and get recommendations from them
            </p>
            <p>
              <i className="fa-solid fa-check"></i> Build and maintain a
              personal watchlist
            </p>
            <p>
              <i className="fa-solid fa-check"></i> Build custom mixed lists
              (movies and TV)
            </p>
            <p>
              <i className="fa-solid fa-check"></i> Take part in movie and TV
              discussions
            </p>
            <p>
              <i className="fa-solid fa-check"></i> Contribute to, and improve
              the information in our database
            </p>
          </div>
        </Col>
        <Col>
          <Form className="ms-3" onSubmit={handleFormSubmit} autoComplete="off">
            <h3>Sign up for an account</h3>
            <p className="mb-4">
              Signing up for an account is free and easy. Fill out the form
              below to get started. JavaScript is required to to continue.
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
              <span className="invalid-feedback text-start">
                {errors.nameError}
              </span>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Password (4 characters minimum)</Form.Label>
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
            <Form.Group className="my-3">
              <Form.Label>Password Confirm</Form.Label>
              <input
                type="password"
                className={`form-control shadow-none border-1 ${
                  errors.confirmPasswordError ? "is-invalid" : ""
                }`}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={(e) => validation(e)}
                onBlur={(e) => validation(e)}
              />
              <span className="invalid-feedback text-start">
                {errors.confirmPasswordError}
              </span>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                className={`form-control shadow-none border-1 ${
                  errors.emailError ? "is-invalid" : ""
                }`}
                name="email"
                value={user.email}
                onChange={(e) => validation(e)}
                onBlur={(e) => validation(e)}
              />
              <span className="invalid-feedback text-start">
                {errors.emailError}
              </span>
            </Form.Group>
            <Form.Group className="my-3">
              <p className="my-4">
                By clicking the (Sign Up) button below, I certify that I have
                read and agree to the TMDB terms of use and privacy policy.
              </p>
              <button
                className={`btn bg-aqua text-white fw-bold me-3 px-3 ${
                  !disable ? "disable" : "change-pass"
                }`}
                disabled={!disable}
              >
                Sign Up
              </button>
              <span className="text-primary" role="button" onClick={backToHome}>
                Cancel
              </span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
