import React from 'react'


const NoteInput = ({newJournalEntry, setNewJournalEntry})=>{
    const handleNoteChange =(event) =>{
        setNewJournalEntry({...newJournalEntry,note:event.target.value})
    }

    return (
        <input type="text" value={newJournalEntry.note} onChange={handleNoteChange}/>
    )
}

export default NoteInput