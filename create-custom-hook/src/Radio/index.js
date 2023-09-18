import "./styles.css";

export const RadioGroup = ({ onChange, selected, options }) => {

    function handleChange(e) {
        onChange(e.target.value)
    }

    return (

        options.map(option => (
        <div className="RadioGroup" key={option.value}>
            <input
                id={option.value}
                type="radio"
                name="source"
                value={option.value}
                onChange={handleChange}
                checked={selected === option.value}
            />
            <label htmlFor={option.value}>{option.content}</label>
        </div>
        )
     )
    )

};
