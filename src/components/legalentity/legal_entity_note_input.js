import React from 'react'


const NoteInput = ({newLegalEntity, setNewLegalEntity})=>{

    const handleNotesChange =(event) =>{

        setNewLegalEntity({...newLegalEntity,notes:event.target.value})
    }

    return (
        <textarea value={newLegalEntity.notes} onChange={handleNotesChange}/>
    )
}

export default NoteInput