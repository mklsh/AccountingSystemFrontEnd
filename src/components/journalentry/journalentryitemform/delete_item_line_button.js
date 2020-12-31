import React from 'react'


const DeleteItemLineButton = ({itemIndex, newJournalEntry, setNewJournalEntry})=>{

    const handleDeleteLine = (event) =>{
        event.preventDefault()
        let itemsListCopy = newJournalEntry.itemsList.map(i=>i)
        itemsListCopy.splice(itemIndex,1)

        setNewJournalEntry({
                ...newJournalEntry,
                itemsList: itemsListCopy
            }
        )
    }
    if (itemIndex <2){
        return null
    }
    return (
        <button onClick={handleDeleteLine}>Delete Line</button>
    )
}
export default DeleteItemLineButton