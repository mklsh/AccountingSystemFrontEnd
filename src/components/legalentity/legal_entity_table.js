import React from 'react'
import LegalEntityRowItem from "./entity_row_item";


const AccountsTable = ({legalEntitiesList , setLegalEntitiesList}) =>{

    return (
        <div>
            <h2>Legal Entities List</h2>
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Type</td>
                <td>Notes</td>
            </tr>
            </thead>
            <tbody>
            {legalEntitiesList.map(a => <LegalEntityRowItem key={a.name} legalEntity={a} setLegalEntitiesList={setLegalEntitiesList} legalEntitiesList={legalEntitiesList}/>)}
            </tbody>
        </table>
        </div>
    )

}

export default AccountsTable