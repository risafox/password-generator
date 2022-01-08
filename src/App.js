import Header from './components/Header';
import Button from './components/Button';
import Criteria from './components/Criteria';
import ChosenQuestions from './components/ChosenQuestions';

function App() {
  return (
    <div className="container">
      <Header />
      <h3>Generate a new password by selecting 3 questions below:</h3>
      <ChosenQuestions display_text="Question 1:"/>
      <ChosenQuestions display_text="Question 2:"/>
      <ChosenQuestions display_text="Question 3:"/>

      <h3>Specify what's needed in your password:</h3>
      <Criteria description="Minimum length (e.g. 8, 12)" />
      <Criteria description="Include symbols (e.g. @$)" />
      <Criteria description="Include numbers (e.g. 123)" />
      <Criteria description="Include lowercase characters (e.g. abc)" />
      <Criteria description="Include uppercase characters (e.g. ABC)" />
      <Criteria description="Exclude ambiguous characters numbers (e.g. {},[])" />
      <Button text="Generate password" />
    </div>
  );
}

export default App;
