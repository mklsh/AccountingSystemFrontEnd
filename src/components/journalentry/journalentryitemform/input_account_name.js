import React from 'react'


const InputAccountName = ({item,itemIndex, newJournalEntry, setNewJournalEntry})=>{

    const handleAccountNameChange = (event) =>{
        setNewJournalEntry({
                ...newJournalEntry,
                itemsList:newJournalEntry.itemsList.map((i,index)=>
                    (index===itemIndex)?{...i,accountName:event.target.value}:i)
            }
        )

    }

    return (
        <input type="text" value={item.accountName} onChange={handleAccountNameChange}/>
    )
}

export default InputAccountName