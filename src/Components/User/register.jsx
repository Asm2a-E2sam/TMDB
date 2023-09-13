import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Container className="f-width">
      <Row className="m-4">
        <Col className="border rounded bg-aqua p-0 side-menu">
          <h5 className="text-white m-0 p-3 fw-bold">Benefits of being a member</h5>
          <div className="bg-white list">
            <p><i className="fa-solid fa-check"></i> Find something to watch on your subscribed streaming services</p>
            <p><i className="fa-solid fa-check"></i> Log the movies and TV shows you have watched</p>
            <p><i className="fa-solid fa-check"></i> Keep track of your Favorite movies and TV shows and get recommendations from them</p>
            <p><i className="fa-solid fa-check"></i> Build and maintain a personal watchlist</p>
            <p><i className="fa-solid fa-check"></i> Build custom mixed lists (movies and TV)</p>
            <p><i className="fa-solid fa-check"></i> Take part in movie and TV discussions</p>
            <p><i className="fa-solid fa-check"></i> Contribute to, and improve the information in our database</p>
          </div>
        </Col>
        <Col>
          <Form className="ms-3">
            <h3>Sign up for an account</h3>
            <p className="mb-4">
            Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.
            </p>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="my-3"> 
              <Form.Label>Password (4 characters minimum)</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="my-3">
               <p className="my-4">By clicking the (Sign Up) button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p> 
              <button className="btn bg-aqua text-white fw-bold me-3 px-3">
                Login
              </button>
              <span className="text-primary" role="button">
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
