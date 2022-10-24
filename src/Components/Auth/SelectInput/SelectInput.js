import "./SelectInput.css";

const SelectInput = (reference) => {
    return (
        <div className="form-input">
            <label htmlFor="country">Country</label>
            <select name="country" id="country" ref={reference}>
                <option value="palestine">Palestine</option>
            </select>
        </div>
    )
}

export default SelectInput;