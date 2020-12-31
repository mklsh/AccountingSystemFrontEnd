import React from 'react'
import AccountRowItem from "./account_row_item";


const AccountsTable = ({accountsList , setAccountsList}) =>{

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
            {accountsList.map( a => <AccountRowItem key={a.name} account={a} accountsList={accountsList} setAccountsList={setAccountsList}/>)}
            </tbody>
        </table>
    )

}

export default AccountsTable