import React from 'react'
import LegalEntityRowItem from "./entity_row_item";


const AccountsTable = ({legalEntitiesList , setLegalEntitiesList}) =>{

    return (
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
    )

}

export default AccountsTable