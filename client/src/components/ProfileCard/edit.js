import React from 'react';
import EasyEdit from 'react-easy-edit';

function Edit({updateUser, handleEdit, city, state, zip}) {

    // const save = (value) => { alert(value) }
    const cancel = () => { alert("Cancelled") }

    return (
        <div>
           <p>City:</p>
            <EasyEdit
                type="text"
                // placeholder="New York"
                value={city}
                name="city"
                onClick={handleEdit()}
                onSave={updateUser()}
                onCancel={cancel}
                saveButtonLabel="OK"
                cancelButtonLabel="X"
                attributes={{ name: "awesome-input", id: 1 }}
            />
             <EasyEdit
                type="text"
                value={state}
                name="state"
                onClick={handleEdit()}
                onSave={updateUser()}
                onCancel={cancel}
                saveButtonLabel="OK"
                cancelButtonLabel="X"
                attributes={{ name: "awesome-input", id: 1 }}
            />
             <EasyEdit
                type="text"
                value={zip}
                name="zip"
                onClick={handleEdit()}
                onSave={updateUser()}
                onCancel={cancel}
                saveButtonLabel="OK"
                cancelButtonLabel="X"
                attributes={{ name: "awesome-input", id: 1 }}
            />
        </div>
    );
}

export default Edit;