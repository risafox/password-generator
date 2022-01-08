import Header from './components/Header';
// // import Button from './components/Button';
import Category from './components/Category';
import Criteria from './components/Criteria';
import ChosenQuestions from './components/ChosenQuestions';
import { Button, Breadcrumb, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Container>
        <h2>Generate a new password by selecting 3 questions below.</h2>
        <Row>
          <Col>
            <Category text="About Yourself" />
            <Category text="About Your Family" />
            <Category text="Others" />
          </Col>
          <Col>
            <h3>Questions chosen:</h3>
            <ChosenQuestions display_text="Question 1:" />
            <ChosenQuestions display_text="Question 2:" />
            <ChosenQuestions display_text="Question 3:" />
          </Col>
        </Row>
        <h3>Specify what's needed in your password:</h3>
        <Criteria description="Minimum length (e.g. 8, 12)" />
        <Criteria description="Include symbols (e.g. @$)" />
        <Criteria description="Include numbers (e.g. 123)" />
        <Criteria description="Include lowercase characters (e.g. abc)" />
        <Criteria description="Include uppercase characters (e.g. ABC)" />
        <Criteria description="Exclude ambiguous characters numbers (e.g. {},[])" />
        <Button>Generate Password</Button>
      </Container>
    </div>
  );
}

export default App;
