import React, {useState} from 'react'
import accountsService from '../../services/legalentity'
import Notification from "../notification";
import SelectType from "./select_legal_entity_type";
import NoteInput from "./legal_entity_note_input";
import NameInput from "./legal_entity_name_input";

const displayError =(msg , setErrorMessage)=>{
    setErrorMessage(msg)
    setTimeout(() => {
        setErrorMessage(null)
    }, 5000)
}

const EditForm =({ legalEntity, legalEntitiesList, setLegalEntitiesList})=>{

    const [editedLegalEntity, setEditedLegalEntity] = useState({
        id:legalEntity.id,
        name:legalEntity.name,
        type:legalEntity.type,
        notes:legalEntity.notes
    })
    const [errorMessage, setErrorMessage] = useState('')


    const editLegalEntity =(event) =>{
        event.preventDefault()
        if (editedLegalEntity.name ===''){
            displayError('Legal entity name must not be empty',setErrorMessage)
        }else {
            accountsService
                .update(legalEntity.id, editedLegalEntity)
                .then(response => {
                    setLegalEntitiesList(legalEntitiesList.map(acc => acc.id === editedLegalEntity.id ? editedLegalEntity : acc)
                    )
                })
                .catch(
                    error => {
                        displayError(error.response.data.message, setErrorMessage)
                    }
                )
        }

    }


    return (
        <div>
            <h1>Edit Legal Entity</h1>
            <form onSubmit={editLegalEntity} >
                <ul>
                    <li>
                        Name: <NameInput newLegalEntity={editedLegalEntity} setNewLegalEntity={setEditedLegalEntity}/>
                    </li>
                    <li>
                        Type: <SelectType newLegalEntity={editedLegalEntity} setNewLegalEntity={setEditedLegalEntity}/>

                    </li>
                    <li>
                        Notes: <NoteInput newLegalEntity={editedLegalEntity} setNewLegalEntity={setEditedLegalEntity}/>
                    </li>
                    <li>
                        <button type="submit">confirm</button>
                        <Notification message={errorMessage}/>
                    </li>
                </ul>
            </form>

        </div>
    )
}

export default EditForm