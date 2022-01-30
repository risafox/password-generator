import { useState } from "react";

const LengthCriteria = (props) => {
    const [lengthIsChecked, setLengthChecked] = useState('default');
    // const [lengthIsChecked, setLengthChecked] = useState('default');
    return (
        <div class = "container">
            <div class = "row">
                <select class= "form-control form-control-sm col" name="lengthType" id="lengthType">
                    <option value="min-length">Mininum</option>
                    <option value="fix-length">Exact</option> 
                </select>
                <div class="col-auto">{props.text}</div>
                <input type="text" class="form-control form-control-sm col" id="length" placeholder="Specify length" 
                    value={lengthIsChecked}
                    onChange={(e) => setLengthChecked(true)}/>
            </div>
        </div>
    );
}

export default LengthCriteria;