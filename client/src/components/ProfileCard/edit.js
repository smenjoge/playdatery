import React from 'react';
import EasyEdit from 'react-easy-edit';

function Edit({updateUser, handleEdit}) {

    // const save = (value) => { alert(value) }
    const cancel = () => { alert("Cancelled") }

    return (
        <div>
           <p> City:</p>
            <EasyEdit
                type="text"
                // placeholder="New York"
                onChange={() => updateUser()}
                onSave={() => handleEdit()}
                onCancel={cancel}
                saveButtonLabel="OK"
                cancelButtonLabel="X"
                attributes={{ name: "awesome-input", id: 1 }}
            //   instructions="Star this repo!"
            />
        </div>
    );
}

export default Edit;