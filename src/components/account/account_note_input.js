import React from 'react'


const NoteInput = ({newAccount, setNewAccount})=>{

    const handleNotesChange =(event) =>{

        setNewAccount({...newAccount,note:event.target.value})
    }

    return (
        <textarea value={newAccount.note} onChange={handleNotesChange}/>
    )
}

export default NoteInput