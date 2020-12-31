import React from 'react'
import JournalEntryItem from "./journal_entry_item";


const JournalEntryItemList = ({itemsList})=>{


    return (
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
            {itemsList.map( (i,index)=><JournalEntryItem key={index} item={i}  />)}
            </tbody>
        </table>
    )
}

export default JournalEntryItemList