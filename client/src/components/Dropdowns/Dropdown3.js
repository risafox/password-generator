const Dropdown3 = () => {
    return (
        <div class= "form-group">
            <select class= "form-control" name="questions" id="questions" defaultValue="default">
                <option disabled value="default"> -- select an option -- </option>
                <option value="best-man">What is the last name of your best man at your wedding?</option>
                <option value="maid-of-honor">What is the last name of your maid of honor at your wedding?</option>
                <option value="best-friend">What is the name of your childhood best friend?</option>
                <option value="first-teacher">What is the name of your first teacher?</option>
                <option value="vehicle-registration">What is your vehicle registration number?</option>
                <option value="library-card">What is your library card number?</option>
            </select>
        </div>
    );
}

export default Dropdown3;