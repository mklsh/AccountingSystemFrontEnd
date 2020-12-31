import React from 'react'

const NameInput = ({newLegalEntity, setNewLegalEntity})=>{

    const handleNameChange =(event) =>{
        setNewLegalEntity({...newLegalEntity,name:event.target.value})
    }


    return (
        <input type="text" value={newLegalEntity.name} onChange={handleNameChange}/>
    )
}

export default NameInput