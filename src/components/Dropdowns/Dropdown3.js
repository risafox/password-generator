const Dropdown3 = () => {
    return (
        <div>
            <select name="questions" id="questions">
                <option disabled selected value> -- select an option -- </option>
                <option value="fav-fruit">What is your favourite fruit?</option>
                <option value="fav-city">What is your favourite city?</option>
                <option value="fav-brand">What is your favourite brand?</option>
                <option value="birth-city">What is your city of birth?</option>
                <option value="first-car-make">What is the make of your first car?</option>
            </select>
        </div>
    );
}

export default Dropdown3;