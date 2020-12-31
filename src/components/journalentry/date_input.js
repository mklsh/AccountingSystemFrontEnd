import React from 'react'


const DateInput = ({newJournalEntry, setNewJournalEntry}) =>{

    const handleDateChange =(event)=>{
        setNewJournalEntry({...newJournalEntry,date:event.target.value})
    }

    return (
        <input type="date" value={newJournalEntry.date} onChange={handleDateChange} />
    )

}
export default DateInput