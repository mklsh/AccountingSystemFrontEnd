import React from 'react'

const NameInput = ({newAccount, setNewAccount})=>{

    const handleNameChange =(event) =>{
        setNewAccount({...newAccount,name:event.target.value})
    }


    return (
        <input type="text" value={newAccount.name} onChange={handleNameChange}/>
    )
}

export default NameInput

