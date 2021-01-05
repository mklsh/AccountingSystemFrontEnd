import React from 'react'
import {useState} from 'react'
import AddJournalEntryItemForm from "./journalentryitemform/add_journal_entry_item_form"
import journalEntryService from '../../services/journal_entry'
import DateInput from "./date_input";
import NoteInput from "./note_input";
import Notification from "../notification";




const AddJournalEntryForm = ({journalEntriesList, setJournalEntriesList})=>{


    const [newJournalEntry, setNewJournalEntry]=useState({

        date:'',
        itemsList: [
            {
                accountName: '',
                amount: 0,
                legalEntityName: '',
                type: 'DEBIT'
            },
            {
                accountName: '',
                amount: 0,
                legalEntityName: '',
                type: 'CREDIT'
            }
        ],
        note: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    const displayNotificationMessage =(msg)=>{
        setErrorMessage(msg)
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }

    const addJournalEntry =(event)=>{
        event.preventDefault()
        if (newJournalEntry.date===''){

            displayNotificationMessage('Error:Must enter date',setErrorMessage)

        }else if (newJournalEntry.itemsList.filter(i => i.accountName==='').length>0){

            displayNotificationMessage('Error:Must enter Account name', setErrorMessage)

        }else {
            journalEntryService.create(newJournalEntry)
                .then(newJE => setJournalEntriesList(journalEntriesList.concat(newJE)))
                .catch(error =>{
                    displayNotificationMessage(error.response.data.message,setErrorMessage)
                })

            setNewJournalEntry ({
                date:'',
                itemsList: [
                    {
                        accountName: '',
                        amount: 0,
                        legalEntityName: '',
                        type: 'DEBIT'
                    },
                    {
                        accountName: '',
                        amount: 0,
                        legalEntityName: '',
                        type: 'CREDIT'
                    }
                ],
                note: ''
            })
        }
    }


    return (
        <div>
            <h2>Add Journal Entry</h2>
        <form onSubmit={addJournalEntry}>
            Date:<DateInput newJournalEntry={newJournalEntry} setNewJournalEntry={setNewJournalEntry}/>
            <table>
                <thead>
                <tr>
                    <td>Type</td>
                    <td>Account</td>
                    <td>Amount</td>
                    <td>Legal Entity</td>
                </tr>
                </thead>
                <tbody>
                    {newJournalEntry.itemsList.map( (item,index) => <AddJournalEntryItemForm key={index} item={item} itemIndex={index} newJournalEntry={newJournalEntry} setNewJournalEntry={setNewJournalEntry}/>)}
                </tbody>

            </table>
            Note: <NoteInput setNewJournalEntry={setNewJournalEntry} newJournalEntry={newJournalEntry} />
            <Notification message={errorMessage} />
            <button type="submit">submit</button>
        </form>
        </div>
    )


}

export default AddJournalEntryForm