import AnswerField from "./AnswerField"
import CategoryQuestionDropdowns from "./Dropdowns/CategoryQuestionDropdowns";


const ChosenQuestions = ({display_text}) => {
    return (
        <div>
            <h3>{display_text}</h3>
            <CategoryQuestionDropdowns />
            <AnswerField />
        </div>
    )
}

export default ChosenQuestions
