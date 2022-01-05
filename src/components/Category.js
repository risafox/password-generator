import Dropdown1 from "./Dropdowns/Dropdown1";
import Dropdown2 from "./Dropdowns/Dropdown2";
import Dropdown3 from "./Dropdowns/Dropdown3";
// import Dropdown3 from "./Dropdowns/AnswerField";

const Category = (props) => {
    return (
        <div>
            <h2>{props.text}</h2>
            <label for="questions">Choose a question:  </label>
            {props.text == "About Yourself" && <Dropdown1 />}
            {props.text == "About Your Family" && <Dropdown2 />}
            {props.text == "Others" && <Dropdown3 />}
            <button>Select</button>
        </div>
    );
}

export default Category;
