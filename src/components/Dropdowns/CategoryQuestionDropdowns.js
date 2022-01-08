import { useState } from "react";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";

const CategoryQuestionDropdowns = () => {
    const [categoryOption, setCategoryOption] = useState('default');

    return (
        <div>
            <div>
                <label for="categories">Choose a category:  </label>
                <select name="categories" id="categories" 
                    value={categoryOption}
                    onChange={(e) => setCategoryOption(e.target.value)}
                >
                    <option disabled selected value="default"> -- select an option -- </option>
                    <option value="about-yourself">About Yourself</option>
                    <option value="about-your-family">About Your Family</option>
                    <option value="about-other">About Other People and Things</option>
                    <option value="custom">Write Your Own Question</option>
                </select>
            </div>

            <div>
                <label for="questions">Choose a question:  </label>
                {categoryOption == "default" && 
                    <select name="questions" id="questions">
                        <option disabled selected value> -- select a category above -- </option> 
                    </select>}
                {categoryOption == "about-yourself" && <Dropdown1 />}
                {categoryOption == "about-your-family" && <Dropdown2 />}
                {categoryOption == "about-other" && <Dropdown3 />}
                {categoryOption == "custom" && 
                    <input type="text" placeholder="Input custom question"></input>
                }
            </div>
        </div>
    );
}

export default CategoryQuestionDropdowns;