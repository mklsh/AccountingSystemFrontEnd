import React from 'react'
import AccountRowItem from "./account_row_item";


const AccountsTable = ({accountsList , setAccountsList}) =>{

    return (
        <div>
            <h2>Accounts List</h2>
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
        </div>
    )

}

export default AccountsTable