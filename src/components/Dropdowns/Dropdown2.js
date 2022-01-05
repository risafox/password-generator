const Dropdown2 = () => {
    return (
        <div>
            <select name="questions" id="questions">
                <option disabled selected value> -- select an option -- </option>
                <option value="mother-middle-name">What is your mother's middle name?</option>
                <option value="sibling-birthdate">What is your oldest sibling's birthday month and year?</option>
                <option value="best-friend">What is the name of your childhood best friend?</option>
                <option value="spouse-city">In what city did you meet your spouse/significant other??</option>
                <option value="father-mother-city">In what city or town did your mother and father meet?</option>
                <option value="youngest-cousin-name">What is the name of your youngest cousin?</option>
                <option value="oldest-cousin-year">Which year were your oldest cousin born?</option>
            </select>
        </div>
    );
}

export default Dropdown2;