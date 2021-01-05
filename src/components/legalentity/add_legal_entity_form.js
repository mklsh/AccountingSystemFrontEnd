import React from 'react'
import {useState} from 'react'
import Notification from "../notification";
import legalEntityService from '../../services/legalentity'
import SelectType from "./select_legal_entity_type";
import NameInput from "./legal_entity_name_input";
import NoteInput from "./legal_entity_note_input";

const displayError =(msg , setErrorMessage)=>{
    setErrorMessage(msg)
    setTimeout(() => {
        setErrorMessage(null)
    }, 5000)
}

const AddLegalEntityForm =({legalEntitiesList,setLegalEntitiesList})=>{

    const [newLegalEntity, setNewLegalEntity] = useState({
        name:'',
        type:'',
        notes:''
    })
    const [errorMessage, setErrorMessage] = useState('')

    const addLegalEntity =(event) =>{
        event.preventDefault()
        if (newLegalEntity.name===''){
            displayError('Error: Legal entity name must not be empty', setErrorMessage)
        }else  if (newLegalEntity.type===''){
            displayError('Error: Must Select legal entity type.',setErrorMessage)
        }else {

            legalEntityService.create(newLegalEntity)
                .then(le => {
                    newLegalEntity.id = le.id
                    setLegalEntitiesList(legalEntitiesList.concat(newLegalEntity))
                    setNewLegalEntity({
                        name: '',
                        type: '',
                        notes: ''
                    })

                })
                .catch(error => {
                    displayError(error.response.data.message, setErrorMessage)
                })

        }
    }

    return (
        <div>
            <h2>Add Legal Entity</h2>
            <form onSubmit={addLegalEntity} >
                <ul>
                    <li>
                        Name: <NameInput newLegalEntity={newLegalEntity} setNewLegalEntity={setNewLegalEntity}/>
                    </li>
                    <li>
                        Type:<SelectType newLegalEntity={newLegalEntity} setNewLegalEntity={setNewLegalEntity}/>
                    </li>
                    <li>
                        Notes: <NoteInput newLegalEntity={newLegalEntity} setNewLegalEntity={setNewLegalEntity}/>
                    </li>
                    <li>
                        <button type="submit">Add</button>
                        <Notification message={errorMessage}/>
                    </li>
                </ul>
            </form>

        </div>
    )
}


export default AddLegalEntityForm