import AnswerField from "./Dropdowns/AnswerField"
const ChosenQuestions = ({display_text}) => {
    return (
        <div>
            {display_text}
            <AnswerField />
        </div>
    )
}

export default ChosenQuestions
