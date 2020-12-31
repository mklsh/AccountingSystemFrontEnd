import React from 'react'
import accountsService from "../../services/accounts";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditForm from "./edit_account_form";



const AccountRowItem = ({account, accountsList,  setAccountsList})=>{

    const handleDelete =()=>{
        if (window.confirm(`Are you sure you want to delete ${account.name}?`)) {
            const deletedAccountID = account.id
            accountsService.remove(deletedAccountID)
                .then(acc => {
                    setAccountsList(accountsList.filter(acc => acc.id !== deletedAccountID))
                })
        }

    }


    return (
        <tr>
            <td>{account.name}</td>
            <td>{account.type}</td>
            <td>{account.note}</td>
            <td>
                <Popup trigger={<button>Edit</button>} position="right center" >
                    <EditForm accountsList={accountsList} account={account} setAccountsList={setAccountsList}/>
                </Popup>
            </td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>

    )

}

export default AccountRowItem