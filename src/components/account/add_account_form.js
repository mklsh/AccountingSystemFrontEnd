import React from 'react'
import {useState} from 'react'
import Notification from "../notification";
import accountsService from '../../services/accounts'
import SelectType from "./select_account_type";
import NameInput from "./account_name_input";
import NoteInput from "./account_note_input";

const displayError =(msg , setErrorMessage)=>{
    setErrorMessage(msg)
    setTimeout(() => {
        setErrorMessage(null)
    }, 5000)
}

const AddAccountForm =({accountsList,setAccountsList})=>{

    const [newAccount, setNewAccount] = useState({
        name:"",
        type:"",
        note:""
    })
    const [errorMessage, setErrorMessage] = useState('')

    const addAccount =(event) =>{
        event.preventDefault()
        if (newAccount.name===''){
            displayError('Error: Account name must not be empty', setErrorMessage)
        }else  if (newAccount.type===''){
            displayError('Error: Must Select account type.',setErrorMessage)
        }else {

            accountsService.create(newAccount)
                .then(acc => {
                    newAccount.id = acc.id
                    setAccountsList(accountsList.concat(newAccount))
                    setNewAccount({
                        name: '',
                        type: '',
                        note: ''
                    })

                })
                .catch(error => {
                    displayError(error.response.data.message, setErrorMessage)
                })

        }
    }

    return (
        <div>
            <h1>Add Account</h1>
            <form onSubmit={addAccount} >
             <ul>
                 <li>
                     Name: <NameInput newAccount={newAccount} setNewAccount={setNewAccount}/>
                 </li>
                 <li>
                     Type:<SelectType newAccount={newAccount} setNewAccount={setNewAccount}/>
                 </li>
                 <li>
                     Notes: <NoteInput newAccount={newAccount} setNewAccount={setNewAccount}/>
                 </li>
                 <li>
                     <button type="submit">Add account</button>
                     <Notification message={errorMessage}/>
                 </li>
             </ul>
            </form>

        </div>
    )
}


export default AddAccountForm