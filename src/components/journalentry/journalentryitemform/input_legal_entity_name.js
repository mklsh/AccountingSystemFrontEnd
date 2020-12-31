import React from 'react'

const InputLegalEntityName = ({item,itemIndex, newJournalEntry, setNewJournalEntry}) =>{

    const handleLegalEntityChange =(event) =>{
        setNewJournalEntry({
                ...newJournalEntry,
                itemsList:newJournalEntry.itemsList.map((i,index)=>
                    (index===itemIndex)?{...i,legalEntityName:event.target.value}:i)
            }
        )

    }

    return (
        <input type="text" value={item.legalEntityName} onChange={handleLegalEntityChange}/>
    )
}

export default InputLegalEntityName