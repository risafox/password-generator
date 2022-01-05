
const Criteria = ({description}) => {
    return (
        <div>
            <input type="checkbox" id={description}></input>
            <label for={description}>{description}</label>
            <input type="text" id={description} placeholder="Specific characters wanted"></input>
        </div>
    )
}

export default Criteria
