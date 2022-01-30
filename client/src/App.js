import Header from './components/Header';
// // import Button from './components/Button';
import Criteria from './components/Criteria';
import ChosenQuestions from './components/ChosenQuestions';
import { Button, Container, Col, Row, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import PasswordDisplay from './components/PasswordDisplay';

function App() {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     passwords: [],
  //     error: null
  //   }
  // }

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('/passwords')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.passwords); 
      setData(data.passwords)
    })
    // .catch(error => {
    //   this.setState({error: error})
    // })
  }, [])

  // generate() {
  //     $.ajax({
  //       type: "POST",
  //       url: "~/Generator.py",
  //       data: { param: text}
  //     }).done(function( o ) {
  //        // do something
  //        console.log(o);
  //     });
  // }

  // render(){
    // const passwordList = this.state.passwords.map((url) => {
    //   return <PasswordDisplay />
    // });

  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Password Generator</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container>
        <Header />
        <h4>Generate a new password by selecting 3 questions below:</h4>
        <Row>
          <Col>
            <ChosenQuestions display_text="Question 1:" />
            <ChosenQuestions display_text="Question 2:" />
            <ChosenQuestions display_text="Question 3:" />
          </Col>
          <Col>
            <Form>
              <h3>Specify what's needed in your password:</h3>
              <Criteria description="length (e.g. 8, 12)" id="len" />
              <Criteria description="Include symbols (e.g. @$)" id='incl_sym'/>
              <Criteria description="Include numbers (e.g. 123)" id='incl_num'/>
              {/* <Criteria description="Include lowercase characters (e.g. abc)" id='incl_low'/> */}
              <Criteria description="Include uppercase characters (e.g. ABC)" id='incl_upp'/>
              <Criteria description="Exclude ambiguous characters numbers (e.g. {},[])" id='excl_amb'/> 
              <Button>Generate Password</Button>
            </Form>
            <PasswordDisplay data={data}/>
            {/* {this.state.error && <h3>{this.state.error}</h3>} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
  
}

export default App;
