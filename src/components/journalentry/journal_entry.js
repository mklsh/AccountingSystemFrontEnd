import React from 'react'
import JournalEntryItemList from "./journal_entry_item_list";
import journalEntryService from '../../services/journal_entry'



const JournalEntry =({journalEntry, journalEntriesList, setJournalEntriesList})=>{

    const handleDelete =()=>{
        const deleteId = journalEntry.id
        journalEntryService.remove(journalEntry.id)
        setJournalEntriesList(journalEntriesList.filter( je => je.id!==deleteId))
    }
    return (
        <div>
            <p>Date: {journalEntry.date}</p>
            <p>ID: {journalEntry.id}</p>
            <JournalEntryItemList key={journalEntry.id} itemsList={journalEntry.itemsList} />
            <p>Note: {journalEntry.note}</p>
            <button onClick={handleDelete}>Delete</button>

        </div>
    )
}

export default JournalEntry