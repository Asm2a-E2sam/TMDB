import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Form className="container m-5">
      <h3>Login to your account</h3>
      <p>
        In order to use the editing and rating capabilities of TMDB, as well as
        get personal recommendations you will need to login to your account. If
        you do not have an account, registering for an account is free and
        simple. <span className="text-primary" role="button">Click here</span> to get started.
      </p>
      <p>
        If you signed up but did not get your verification email, <span className="text-primary" role="button">click here</span> to
        have it resent.
      </p>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="my-2">
        <button className="btn bg-aqua text-white fw-bold me-3 px-3">Login</button>
        <span className="text-primary" role="button">
          Reset password
        </span>
      </Form.Group>
    </Form>
  );
}

export default Login;
