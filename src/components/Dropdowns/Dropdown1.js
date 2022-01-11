const Dropdown1 = () => {
    return (
        <div class= "form-group">
            <select class= "form-control" name="questions" id="questions">
                <option disabled selected value> -- select an option -- </option>
                <option value="fav-fruit">What is your favourite fruit?</option>
                <option value="fav-author">Who is your favourite author?</option>
                <option value="fav-city">What is your favourite city?</option>
                <option value="fav-brand">What is your favourite brand?</option>
                <option value="birth-city">What is your city of birth?</option>
                <option value="first-car-make">What is the make of your first car?</option>
                <option value="sith-grade-school">What school did you attend for sixth grade?</option>
                <option value="first-kiss">Where were you when you had your first kiss?</option>
                <option value="grow-up-street">What is the name of the street on which you grew up?</option>
            </select>
        </div>
    );
}

export default Dropdown1;