import React from 'react'



const JournalEntryItem =({item})=>{

    return (
        <tr>
            <td>{item.type}</td>
            <td>{item.accountName}</td>
            <td>{item.amount}</td>
            <td>{item.legalEntityName}</td>
        </tr>
    )
}

export default JournalEntryItem