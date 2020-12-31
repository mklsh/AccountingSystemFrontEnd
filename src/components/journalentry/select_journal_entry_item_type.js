import React from 'react'


const SelectItemType = ({item,itemIndex,newJournalEntry, setNewJournalEntry})=>{

    const handleTypeSelect = (event) =>{
        setNewJournalEntry({
                ...newJournalEntry,
                itemsList:newJournalEntry.itemsList.map((i,index)=>
                    (index===itemIndex)?{...i,type:event.target.value}:i)
            }
        )
    }

    return (
        <select value={item.type} onChange={handleTypeSelect} >
        <option value="DEBIT">Debit</option>
        <option value="CREDIT">Credit</option>
        </select>
    )
}
export default SelectItemType