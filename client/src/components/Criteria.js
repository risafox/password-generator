import 'bootstrap/dist/css/bootstrap.min.css'
import LengthCriteria from './LengthCriteria'
const Criteria = ({ description, id }) => {
    return (
        <div>
            <div class = "form-group mb-3">
                <input class="form-check-input" type="checkbox" value="" id={description} />
                <label class="form-check-label" htmlFor={description}>
                    {id == "len" && <LengthCriteria text={description}/>}
                    {id != "len" && description}
                </label>
            </div>
        </div>
    )
}

export default Criteria
