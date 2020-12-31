import React from 'react'


const AddItemLineButton = ({itemIndex, newJournalEntry, setNewJournalEntry})=>{

    const handleAddLine =(event)=>{
        event.preventDefault()
        let itemsListCopy = newJournalEntry.itemsList.map(i=>i)
        itemsListCopy.splice(itemIndex+1,0,{
            accountName: '',
            amount: 0,
            legalEntityName: '',
            type: 'DEBIT'})

        setNewJournalEntry({
                ...newJournalEntry,
                itemsList: itemsListCopy
            }
        )
    }

    return (

        <button onClick={handleAddLine}>Add Line</button>

    )
}

export default AddItemLineButton