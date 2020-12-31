import React from 'react'
import accountsService from "../../services/legalentity";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditForm from "./edit_legal_entity_form";



const LegalEntityRowItem = ({legalEntity, legalEntitiesList, setLegalEntitiesList})=>{

    const handleDelete =()=>{
        if (window.confirm(`Are you sure you want to delete ${legalEntity.name}?`)) {
            const deletedLegalEntityID = legalEntity.id
            accountsService.remove(deletedLegalEntityID)
                .then(acc => {
                    setLegalEntitiesList(legalEntitiesList.filter(acc => acc.id !== deletedLegalEntityID))
                })
        }

    }


    return (
        <tr>
            <td>{legalEntity.name}</td>
            <td>{legalEntity.type}</td>
            <td>{legalEntity.notes}</td>
            <td>
                <Popup trigger={<button>Edit</button>} position="right center" >
                    <EditForm legalEntity={legalEntity} legalEntitiesList={legalEntitiesList} setLegalEntitiesList={setLegalEntitiesList}/>
                </Popup>
            </td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>

    )

}

export default LegalEntityRowItem