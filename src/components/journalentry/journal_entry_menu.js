import React from 'react'
import journalEntryService from '../../services/journal_entry'
import {useState,useEffect} from 'react'
import JournalEntry from './journal_entry'
import AddJournalEntryForm from "./add_journal_entry_form";


const JournalEntryMenu =()=>{

    const [journalEntriesList, setJournalEntriesList] = useState([])

    useEffect(()=> {
        journalEntryService.getAll()
            .then (l => setJournalEntriesList(l))
    },[])

    return (
        <div>
            <h1>Journal Entries</h1>
            <AddJournalEntryForm journalEntriesList={journalEntriesList} setJournalEntriesList={setJournalEntriesList}/>
            <h2>Journal Entries List</h2>
            {journalEntriesList.map(je => <JournalEntry key={je.id} journalEntry={je} journalEntriesList={journalEntriesList} setJournalEntriesList={setJournalEntriesList} />)}
        </div>
    )
}

export default JournalEntryMenu