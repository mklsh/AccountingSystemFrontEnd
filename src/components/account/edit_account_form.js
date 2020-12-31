import React, {useState} from 'react'
import accountsService from '../../services/accounts'
import Notification from "../notification";
import SelectType from "./select_account_type";
import NoteInput from "./account_note_input";
import NameInput from "./account_name_input";

const displayError =(msg , setErrorMessage)=>{
    setErrorMessage(msg)
    setTimeout(() => {
        setErrorMessage(null)
    }, 5000)
}

const EditForm =({account,accountsList, setAccountsList})=>{

    const [editedAccount, setEditedAccount] = useState({
        id:account.id,
        name:account.name,
        type:account.type,
        note:account.note
    })
    const [errorMessage, setErrorMessage] = useState('')


    const editAccount =(event) =>{
        event.preventDefault()
        if (editedAccount.name ===''){
            displayError('Account name must not be empty',setErrorMessage)
        }else {
            accountsService
                .update(account.id, editedAccount)
                .then(response => {
                    setAccountsList(accountsList.map(acc => acc.id === editedAccount.id ? editedAccount : acc)
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
            <h1>Edit Account</h1>
            <form onSubmit={editAccount} >
                <ul>
                    <li>
                        Name: <NameInput newAccount={editedAccount}setNewAccount={setEditedAccount}/>
                    </li>
                    <li>
                        Type: <SelectType newAccount={editedAccount} setNewAccount={setEditedAccount}/>

                    </li>
                    <li>
                        Notes: <NoteInput newAccount={editedAccount} setNewAccount={setEditedAccount}/>
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