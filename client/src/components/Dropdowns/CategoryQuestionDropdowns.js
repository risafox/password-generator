import { useState } from "react";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";

const CategoryQuestionDropdowns = () => {
    const [categoryOption, setCategoryOption] = useState('default');

    return (
        <div class="container">
            <form>
                <div class="row">
                    <div class="col mb-2">
                        <div class= "form-group">
                            <label htmlFor="categories">Choose a category:  </label>
                            <select class="form-control" name="categories" id="categories" 
                                value={categoryOption}
                                onChange={(e) => setCategoryOption(e.target.value)}
                            >
                                <option disabled value="default"> -- select an option -- </option>
                                <option value="about-yourself">About Yourself</option>
                                <option value="about-your-family">About Your Family</option>
                                <option value="about-other">About Other People and Things</option>
                                <option value="custom">Write Your Own Question</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col mb-3">
                        <div class="form-group">
                            <label htmlFor="questions">Choose a question:  </label>
                            {categoryOption == "default" && 
                                <select class="form-control" name="questions" id="questions" defaultValue="default">
                                    <option disabled value="default"> -- select a category above -- </option> 
                                </select>}
                            {categoryOption == "about-yourself" && <Dropdown1 />}
                            {categoryOption == "about-your-family" && <Dropdown2 />}
                            {categoryOption == "about-other" && <Dropdown3 />}
                            {categoryOption == "custom" && 
                                <input class="form-control" type="text" placeholder="Input custom question"></input>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CategoryQuestionDropdowns;