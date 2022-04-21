import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), textField: ''},
    ]);

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(inputField => {
            if (id === inputField.id) {
                inputField["textField"] = event.target.value;
                console.log(inputField)
            }
            return inputField;
        })

        setInputFields(newInputFields);
    }

    const handleSubmit = () => {
        console.log(inputFields);
    }

    const handleAddButton = () => {
        setInputFields([...inputFields, { id: uuidv4(), textField: ''}]);
    }

    const handleRemoveButton = (id) => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return(
        <>
            {inputFields.map( inputField => {
                return(
                    <div key={inputField.id}>
                        <input onChange={(event) => handleChangeInput(inputField.id, event)} type='text'></input>
                        <button onClick={handleAddButton}>+</button>
                        <button disabled={inputFields.length === 1} onClick={() => handleRemoveButton(inputField.id)}>-</button>
                    </div>     
                );
            })}
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Form;